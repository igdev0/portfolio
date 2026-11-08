"use server";

export async function notifyDiscord(message: string) {

  await fetch(process.env.DISCORD_HOOK_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message
    }),
  })
}