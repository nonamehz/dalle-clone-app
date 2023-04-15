import { saveAs } from 'file-saver';
import { surpriseMePrompts } from '../constants';


export const getRandomPrompt = (prompt) => {

    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //evitar repetido anterior
    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;

}

export const downloadImg = (_id, image) => {
    saveAs(image, `download-${_id}.jpg`);
}