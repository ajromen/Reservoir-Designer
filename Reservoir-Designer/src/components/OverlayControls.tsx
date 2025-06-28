import { CenterIcon, CollapseIcon, MinusIcon, PlusIcon } from "../assets/svg-images";
import usePanelStore from "../stores/usePanelStore";
import FloatingButton from "./FloatingButton";

type OverlayControlsProps = {
    onToggle: () => void;
    onZoomIn: () => void;
    onZoomOut: () => void;
    onCenter: () => void;
    // onPan: () => void;
}

function OverlayControls({ onToggle, onZoomIn, onZoomOut, onCenter }: OverlayControlsProps) {
    const leftSize = usePanelStore((s) => s.leftSize);
    const rightSize = usePanelStore((s) => s.rightSize);

    return (
        <div className="absolute z-50 flex justify-between p-2 h-full"
            style={{
                left: `calc(${leftSize}%)`,
                right: `calc(${rightSize}%)`,
                pointerEvents: "none"
            }}>

            <FloatingButton onClick={onToggle} icon={CollapseIcon} title="Smanji" />

            <div className="flex p-0 m-0 flex-col justify-between">
                {/* zumiranje */}
                <div className="flex p-0 m-0 flex-col gap-2">
                    <FloatingButton onClick={onZoomIn} icon={PlusIcon} title="Zumiraj" />
                    <FloatingButton onClick={onZoomOut} icon={MinusIcon} title="Odzumiraj" />
                </div>

                {/* kontrole */}
                <div className="flex p-0 m-0 flex-col gap-2">
                    <FloatingButton onClick={onCenter} icon={CenterIcon} title="Centriraj" />
                    {/* <FloatingButton onClick={onPan} icon={HandIcon} title="Pan" /> */}
                </div>
            </div>
        </div>
    )
}

export default OverlayControls