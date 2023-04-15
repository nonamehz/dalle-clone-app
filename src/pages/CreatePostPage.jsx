import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useForm, useDalleAI, usePosts } from '../hooks';
import { InputField, Loader } from '../components';

import { getRandomPrompt } from '../utils';
import preview from '../assets/preview.png';


export const CreatePostPage = () => {

    const { startGeneratingImage, generatingImg } = useDalleAI();
    const { startSavingPost, loading } = usePosts();

    const navigate = useNavigate();

    const { name, prompt, image, formValues, setFormValues, onInputChange } = useForm({
        name: '',
        prompt: '',
        image: '',
    });

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!prompt && !name && !image) return toast.error('Please complete the fields to generate the image');

        const data = await startSavingPost(formValues);
        if (!data.success) return toast.error('Something happened, try again.');

        navigate('/');
    }

    const onSurprise = () => {
        const randomPrompt = getRandomPrompt(prompt);
        setFormValues({
            ...formValues,
            prompt: randomPrompt
        });
    }

    const onGenerateImage = async () => {
        //si no hay un prompt para generar la img
        if (!prompt) return toast.error('Enter a prompt');

        //generar img
        const data = await startGeneratingImage(prompt);
        setFormValues({
            ...formValues,
            image: `data:image/jpeg;base64,${data.image}`
        });
    }

    return (
        <section className="px-5 mx-auto max-w-7xl">
            <h2 className="mb-2 text-3xl font-bold">Create</h2>
            <p className="text-sm text-gray-500">
                Create imaginative and visually stunning images through DALL-E AI and share them with the community
            </p>

            <form onSubmit={onSubmit} className="flex flex-col max-w-3xl gap-4 mt-10 text-sm">

                <InputField
                    labelText="Your name"
                    placeholder="Rodrigo"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                />

                <InputField
                    labelText="Prompt"
                    placeholder="A post-apocalyptic wasteland with ruined buildings and a blood-red sky."
                    type="text"
                    name="prompt"
                    value={prompt}
                    onChange={onInputChange}
                    onSurprise={onSurprise}
                    isSurpriseMe
                />

                {/* IMAGE PLACEHOLDER */}
                <div className="relative overflow-hidden bg-white border border-gray-300 rounded-xl w-72 h-72">
                    {generatingImg && <div className="absolute flex w-full h-full bg-black/30 place-items-center"><Loader /></div>}
                    {image
                        ? <img
                            src={image}
                            alt={prompt}
                            className="object-contain w-full h-full"
                        />

                        : <img
                            src={preview}
                            alt="preview"
                            className="object-contain w-full h-full opacity-20"
                        />
                    }
                </div>

                <div>
                    <button
                        type="button"
                        onClick={onGenerateImage}
                        disabled={generatingImg}
                        className="w-full px-5 py-3 mb-5 font-semibold text-white bg-black rounded-md md:w-auto disabled:bg-gray-400"
                    >
                        {generatingImg ? 'Generating...' : 'Generate'}
                    </button>
                </div>

                <div>
                    <p className="mb-3 text-sm text-gray-500">
                        Once you have created the image you want, you can share it with others in the community
                    </p>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-5 py-3 mb-5 font-semibold text-white transition-colors rounded-md md:w-auto bg-emerald-500 hover:bg-emerald-700 disabled:bg-emerald-200">
                        {loading ? 'Sharing...' : 'Share with the community'}
                    </button>
                </div>

            </form>

            <Toaster position='top-right' />

        </section>
    )
}