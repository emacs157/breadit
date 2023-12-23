import { db } from "@/lib/db";
const bcrypt = require("bcryptjs");

export async function POST(req: Request) {
  const body = await req.json();

  const { username, password } = body; // Extract password from request
  console.log(body);
  try {
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      console.log("existingUser", existingUser);
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword,
        // Add other fields as needed
      },
    });

    console.log(user);

    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
