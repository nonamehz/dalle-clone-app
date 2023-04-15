import { downloadImg } from '../utils';
import { DownloadIcon } from './';


export const Card = ({ _id, name, prompt, image }) => {
    return (
        <div className="relative rounded-xl group shadow-card hover:shadow-cardhover card">
            <img
                className="object-cover w-full h-auto rounded-xl"
                src={image}
                alt={prompt}
            />
            <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131F] m-2 p-4 rounded-md">
                <p className="overflow-y-auto text-white text-md prompt">{prompt}</p>
                <div className="flex items-center justify-between gap-2 mt-5">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center object-cover text-xs font-bold text-white rounded-full bg-emerald-500 w-7 h-7">
                            {name[0]}
                        </div>
                        <p className="text-sm text-white">{name}</p>
                    </div>
                    <button type="button" onClick={() => downloadImg(_id, image)} className="bg-transparent border-none outline-none">
                        <DownloadIcon strokeWidth={2} />
                    </button>
                </div>
            </div>
        </div>
    )
}