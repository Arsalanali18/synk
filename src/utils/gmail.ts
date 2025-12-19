// export async function fetchGmailMessages(accessToken: string, query = "") {
//   try {
//     // Gmail API endpoint for listing messages
//     const response = await fetch(
//       `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=${encodeURIComponent(query)}&maxResults=20`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     const data = await response.json();

//     if (!data.messages) {
//       console.log("No messages found.");
//       return [];
//     }

//     // Fetch full message details for each message
//     const messagePromises = data.messages.map(async (msg: any) => {
//       const detailResponse = await fetch(
//         `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`,
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );
//       const detailData = await detailResponse.json();
//       return detailData;
//     });

//     const messages = await Promise.all(messagePromises);
//     return messages;
//   } catch (error) {
//     console.error("Error fetching Gmail messages:", error);
//     return [];
//   }
// }
// export function detectSubscriptionsFromEmails(messages: any[]) {
//   const subscriptionKeywords = [
//     "subscription",
//     "receipt",
//     "invoice",
//     "payment confirmation",
//     "auto-renew",
//     "thank you for your payment",
//   ];

//   const subscriptionEmails = [];

//   for (const msg of messages) {
//     const snippet = msg.snippet?.toLowerCase() || "";

//     const isSubscriptionEmail = subscriptionKeywords.some((keyword) =>
//       snippet.includes(keyword)
//     );

//     if (isSubscriptionEmail) {
//       const headers = msg.payload?.headers || [];
//       const subject =
//         headers.find((h: any) => h.name === "Subject")?.value || "No Subject";
//       const from =
//         headers.find((h: any) => h.name === "From")?.value || "Unknown Sender";

//       subscriptionEmails.push({ subject, from, snippet });
//     }
//   }

//   return subscriptionEmails;
// }

import axios from "axios";

export const fetchGmailMessages = async (token: string) => {
  try {
    // Step 1: Get message list (IDs)
    const listResponse = await axios.get(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages?q=subscription",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const messages = listResponse.data.messages || [];

    if (messages.length === 0) {
      console.log("No messages found.");
      return [];
    }

    // Step 2: Fetch details for each message
    const messageDetails = await Promise.all(
      messages.slice(0, 10).map(async (msg: any) => {
        const res = await axios.get(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const headers = res.data.payload.headers;
        const subjectHeader = headers.find((h: any) => h.name === "Subject");
        const fromHeader = headers.find((h: any) => h.name === "From");

        return {
          id: msg.id,
          subject: subjectHeader ? subjectHeader.value : "(No Subject)",
          from: fromHeader ? fromHeader.value : "(Unknown Sender)",
        };
      })
    );

    console.log("Fetched Gmail Messages:", messageDetails);
    return messageDetails;
  } catch (error: any) {
    console.error("Error fetching Gmail messages:", error.response?.data || error.message);
    return [];
  }
};
