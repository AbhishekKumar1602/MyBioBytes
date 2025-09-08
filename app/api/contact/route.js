import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const { name, email, message } = data;

    console.log("Contact form submitted:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}



// import { NextResponse } from "next/server";
// import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// const ses = new SESClient({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });

// export async function POST(request) {
//   try {
//     const { name, email, message } = await request.json();

//     const params = {
//       Source: process.env.EMAIL_FROM, // must be a verified identity in SES
//       Destination: {
//         ToAddresses: [process.env.EMAIL_TO], // you can make this dynamic if you want
//       },
//       Message: {
//         Subject: { Data: `New Contact Form Submission from ${name}` },
//         Body: {
//           Text: { Data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}` },
//           Html: {
//             Data: `<h3>New Contact Submission</h3>
//                    <p><strong>Name:</strong> ${name}</p>
//                    <p><strong>Email:</strong> ${email}</p>
//                    <p><strong>Message:</strong><br/>${message}</p>`,
//           },
//         },
//       },
//     };

//     const command = new SendEmailCommand(params);
//     await ses.send(command);

//     return NextResponse.json(
//       { success: true, message: "Email sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("SES send error:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to send email." },
//       { status: 500 }
//     );
//   }
// }
