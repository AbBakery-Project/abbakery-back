import { ApplicationError } from "@/protocols";

export function failToGenerateAudioError(): ApplicationError {
  return {
    name: "FailToGenerateAudioError",
    message: "The TTS API failed to generate the audio file",
  };
}