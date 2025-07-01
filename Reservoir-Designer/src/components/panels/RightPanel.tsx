import useCanvasStore from "../../stores/useCanvasStore";

function RightPanel() {
    const setIsHorizontal = useCanvasStore((s) => s.setIsHorizontal);
    const setLength = useCanvasStore((s) => s.setLength);
    const setColor = useCanvasStore((s) => s.setColor);

    return (
        <div className=" flex flex-col p-5 justify-between h-full">
            <div className="flex flex-col gap-8 text-white">

                <div className="flex flex-col gap-2 ">
                    <h3>Orijentacija</h3>

                    <div className="flex flex-row gap-2.5">
                        <button onClick={() => setIsHorizontal(false)} className="bg-white border-0 text-black px-8 py-2 font-medium">Vertikalno</button>
                        <button onClick={() => setIsHorizontal(true)} className="bg-neutral-950 border-[1px] border-neutral-500 text-neutral-400 px-8 py-2">Horizontalno</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5 ">
                    <h3>Sirina</h3>

                    <div className="flex flex-row gap-2">
                        <button className="bg-white border-0 text-black px-8 py-2 font-medium">Vertikalno</button>
                        <button className="bg-neutral-950 border-[1px] border-neutral-500 text-neutral-400 px-8 py-2">Horizontalno</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Duzina</h3>
                    <input onChange={e => setLength(Number(e.target.value))} className="border-[1px] border-neutral-500 text-neutral-400 px-2 py-1.5 text-right" type="number" placeholder="5.2m" />
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Zapremina</h3>
                    <input className="border-[1px] border-neutral-500 text-neutral-400 px-2 py-1.5 text-right" type="number" placeholder="5.2m" />
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Svrha</h3>
                    <input className="border-[1px] border-neutral-500 text-neutral-400 px-2 py-1.5 text-right" type="number" placeholder="1470.3L" />
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
                    <textarea placeholder="Osravite dodatan komentar..." className="border-[1px] border-neutral-500 rounded-none text-neutral-400 p-2 h-40"></textarea>
                </div>
            </div>

            <button className="text-black bg-white border-0 rounded-none py-2 w-full ">Dodaj u korpu</button>
        </div>
    );
}

export default RightPanel