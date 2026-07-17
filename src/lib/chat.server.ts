import { createServerFn } from "@tanstack/react-start";
import { InferenceClient } from "@huggingface/inference";
import { WEBSITE_CONTEXT } from "./knowledgeBase";

const client = new InferenceClient(process.env.HF_TOKEN);

export const chatWithAI = createServerFn({
  method: "POST",
})
  .validator((data: { messages: { role: string; content: string }[] }) => data)
  .handler(async ({ data }) => {
    const optimizedMessages = [
      {
        role: "system",
        content: WEBSITE_CONTEXT,
      },
      ...data.messages,
    ];

    const response = await client.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: optimizedMessages,
      max_tokens: 512,
      temperature: 0.3,
    });

    return (
      response.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response."
    );
  });