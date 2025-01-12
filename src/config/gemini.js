const apIKey = 'AIzaSyDV55jSiZpQbp-xnymgLc2VgKmUDL4Wrzg'


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Replace 'YOUR_API_KEY' with your actual Gemini API key
  const apiKey = "AIzaSyDV55jSiZpQbp-xnymgLc2VgKmUDL4Wrzg";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings (optional)
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });
  
    const userInput = "INSERT_INPUT_HERE";  // Replace with your desired prompt
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;