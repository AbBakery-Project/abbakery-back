//import * as nodeRestClient from "node-rest-client";
import { Request, Response } from "express";

async function postTTS(text: string, audioName: string) {
    
    const fs = require('fs');
    let Client = require('node-rest-client').Client;
    
    let client = new Client();

    let auth_request_args = {
        data: "",
        headers: { "Ocp-Apim-Subscription-Key": `${process.env.SPEECH_KEY}` }
    };

    let bearer_token = 'Bearer ';

    let ssml = `<speak version='1.0' xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang='pt-BR'>
                <voice  name='Microsoft Server Speech Text to Speech Voice (pt-BR, AntonioNeural)'>${text}</voice> </speak>`;

    client.post("https://brazilsouth.api.cognitive.microsoft.com/sts/v1.0/issuetoken", 
        auth_request_args, 
            function (auth_data: Request, auth_response: Response) {
        
        bearer_token += auth_data.toString();

        let audio_request_args = {
            data: ssml,
            headers: {"Content-Type": "application/ssml+xml",
            "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
            "User-Agent": "AbBakery",
            "Authorization": bearer_token }
        };

        client.post("https://brazilsouth.tts.speech.microsoft.com/cognitiveservices/v1",
                    audio_request_args,
                    function (audio_data: Request, audio_response: Response) {
                fs.writeFileSync(`${audioName}.mpga`, audio_data);
        });

    });

}

const ttsService = {
    postTTS
};

export default ttsService;
