import useCanvasStore from "../../stores/useCanvasStore";

const radiuses = [0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.3, 1.8, 2, 2.3, 2.4];

function RightPanel() {
    const setIsHorizontal = useCanvasStore((s) => s.setIsHorizontal);
    const setLength = useCanvasStore((s) => s.setLength);
    const setRadius = useCanvasStore((s) => s.setRadius);
    const setColor = useCanvasStore((s) => s.setColor);
    const selected = useCanvasStore((s) => s.radius);
    const length = useCanvasStore((s) => s.length);

    return (
        <div className=" flex flex-col p-5 justify-between h-full overflow-auto gap-8">
            <div className="flex flex-col gap-8 text-white">

                <div className="flex flex-col gap-2 ">
                    <h3>Orijentacija</h3>

                    <div className="flex flex-row gap-2.5">
                        <button onClick={() => setIsHorizontal(false)} className="bg-white border-0 text-black px-8 py-2 font-medium">Vertikalno</button>
                        <button onClick={() => setIsHorizontal(true)} className="bg-neutral-950 border-[1px] border-neutral-500 text-neutral-400 px-8 py-2">Horizontalno</button>
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
                                    ${selected === radius
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
                            placeholder={length.toString()}
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">m</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Zapremina</h3>
                    <div className="relative">
                        <input
                            onChange={e => setLength(Number(e.target.value))}
                            className="border-[1px] border-neutral-500 text-neutral-400 px-0 py-1.5 text-right pr-8 w-full"
                            type="number"
                            placeholder={length.toString()}
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">L</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h3>Svrha</h3>
                    {/* <input className="border-[1px] border-neutral-500 text-neutral-400 px-2 py-1.5 text-right" type="number" placeholder="1470.3L" /> */}
                    <select
                        className="border-[1px] border-neutral-500 text-neutral-400 px-2 py-1.5"
                        // value={}
                        onChange={() => { }}
                        style={{
                            width: "100%",
                            backgroundColor: "#111111",
                            color: "#a0a0a0",
                            fontSize: 16,
                            padding: "6px 12px",
                            border: "1px solid #444",
                            borderRadius: 3,
                            appearance: "none",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            cursor: "pointer",
                        }}
                    >
                        <option value="Pijaca voda">Pijaca voda</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
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