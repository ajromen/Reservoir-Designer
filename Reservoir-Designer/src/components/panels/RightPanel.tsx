import { useEffect, useState } from "react";
import useCanvasStore from "../../stores/useCanvasStore";

const radiuses = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.3, 1.8, 2, 2.3, 2.4];

function RightPanel() {
    const setIsHorizontal = useCanvasStore((s) => s.setIsHorizontal);
    const setLength = useCanvasStore((s) => s.setLength);
    const setRadius = useCanvasStore((s) => s.setRadius);
    const setColor = useCanvasStore((s) => s.setColor);
    const selectedRadius = useCanvasStore((s) => s.radius);
    const length = useCanvasStore((s) => s.length);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);


    const [volumeInput, setVolumeInput] = useState("");
    const calculatedVolume = Math.pow(selectedRadius, 2) * Math.PI * length * 1000;

    useEffect(() => {
        setVolumeInput(""); // Reset on dimension change
    }, [selectedRadius, length]);

    function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setVolumeInput(e.target.value); // Allow free typing
    }

    function validateVolumeInput() {
        const parsed = parseFloat(volumeInput);

        if (!isNaN(parsed)) {
            const isSame = Math.abs(parsed - calculatedVolume) < 0.01;
            if (!isSame) {
                setVolumeInput(""); // Clear only if it's wrong
            }
        } else {
            setVolumeInput(""); // Also clear on invalid number
        }
    }



    return (
        <div className=" flex flex-col p-5 justify-between h-full overflow-auto gap-8">
            <div className="flex flex-col gap-8 text-white">

                <div className="flex flex-col gap-2 ">
                    <h3>Orijentacija</h3>

                    <div className="flex flex-row gap-2.5">
                        <button onClick={() => setIsHorizontal(false)} className={` border-[1px]  px-8 py-2 ${!isHorizontal ? "text-black bg-white" : "bg-neutral-950 border-neutral-500 text-neutral-400"}`}>Vertikalno</button>
                        <button onClick={() => setIsHorizontal(true)} className={` border-[1px]  px-8 py-2 ${isHorizontal ? "text-black bg-white" : "bg-neutral-950 border-neutral-500 text-neutral-400"}`}>Horizontalno</button>

                    </div>
                </div>

                <div className="flex flex-col gap-2.5 ">
                    <h3>Precnik</h3>

                    <div className="flex flex-wrap gap-2 w-full">
                        {radiuses.map((radius) => (
                            <button
                                key={radius}
                                onClick={() => setRadius(radius)}
                                className={`px-4 py-2 text-sm border 
                                    ${selectedRadius === radius
                                        ? "bg-white text-black border-none"
                                        : "bg-neutral-950 text-neutral-400 border-neutral-500"}`}
                            >
                                {radius.toFixed(1)}m
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Duzina</h3>
                    <div className="relative">
                        <input
                            onChange={e => setLength(Number(e.target.value))}
                            className="border-[1px] border-neutral-500 text-neutral-400 px-0 py-1.5 text-right pr-8 w-full"
                            type="number"
                            value={length.toFixed(2)}
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">m</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Zapremina</h3>
                    <div className="relative">
                        <input
                            type="number"
                            value={volumeInput}
                            placeholder={calculatedVolume.toFixed(2)}
                            onChange={handleVolumeChange}
                            onBlur={validateVolumeInput}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    validateVolumeInput();
                                }
                            }}
                            className="border-[1px] border-neutral-500 text-neutral-400 px-0 py-1.5 text-right pr-8 w-full"
                        />

                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 po0inter-events-none">L</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Svrha</h3>

                    <select
                        className="border-[1px] border-neutral-500 bg-neutral-950 text-neutral-400 px-2 py-1.5 rounded-none"
                        // value={}
                        onChange={() => { }}
                    >
                        <option>Pijaća voda </option>
                        <option>Tehnička voda </option>
                        <option>Agresivne tečnosti (jake kiseline, baze, tečne soli) </option>
                        <option>Otpadne vode </option>
                        <option>Opasne materije </option>
                        <option>Farmaceutski preparati </option>
                        <option>Glikol i antifriz </option>
                        <option>Deterdženti i tečni sapuni </option>
                        <option>Mineralna ulja </option>
                        <option>Naftni derivati </option>
                        <option>Lož ulje </option>
                        <option>Dizel gorivo </option>
                        <option>Tečna i čvrsta mineralna đubriva </option>
                        <option>Žitarice </option>
                        <option>Stočna hrana </option>
                        <option>Voće i povrće (fermentacija) </option>
                        <option>Prehrambene sirovine </option>
                        <option>Suncokretovo, maslinovo, sojino ulje </option>
                        <option>Vino, rakija, sirće </option>
                        <option>Pivo i bezalkoholna pića </option>
                        <option>Praškasti i zrnasti materijali </option>
                        <option>Rasuti materijali </option>
                        <option>Otpadne vode (septičke jame) </option>
                        <option>Bio-otpad (bio-prečistači, bio-septičke jame) </option>
                        <option>Procesni reaktori (mešanje i doziranje) </option>
                        <option>Otpadni gasovi (skruberi, apsorberi) </option>
                        <option>Neutralizacione i dezinfekcione supstance </option>
                        <option>Voda za navodnjavanje </option>
                        <option>Mleko i mlečni proizvodi </option>
                        <option>Kiseljenje kupusa (zimnica) </option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Boja</h3>
                    <div className="flex flex-row gap-2.5">
                        <button onClick={() => setColor('#338F37')} className="bg-[#338F37] w-6 h-6"></button>
                        <button onClick={() => setColor('#dddddd')} className="bg-[#dddddd] w-6 h-6"></button>
                        <button onClick={() => setColor('#278AD0')} className="bg-[#278AD0] w-6 h-6"></button>
                        <button onClick={() => setColor('#1e1e1e')} className="bg-[#1e1e1e] w-6 h-6"></button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Dodatno</h3>
                    <textarea placeholder="Osravite dodatan komentar..." className="border-[1px] border-neutral-500 rounded-none text-neutral-400 p-2 h-20"></textarea>
                </div>
            </div>

            <button className="text-black bg-white border-0 rounded-none py-2 w-full ">Dodaj u korpu</button>
        </div>
    );
}

export default RightPanel