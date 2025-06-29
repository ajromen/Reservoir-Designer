import { useEffect } from "react";
import { CenterIcon, CollapseIcon, MinusIcon, PlusIcon } from "../../assets/svg-images";
import useCanvasStore from "../../stores/useCanvasStore";
import usePanelStore from "../../stores/usePanelStore";
import FloatingButton from "./FloatingButton";



function OverlayControls() {

    const zoomIn = useCanvasStore((s) => s.zoomIn);
    const zoomOut = useCanvasStore((s) => s.zoomOut);

    const center = useCanvasStore((s) => s.center);

    const toggleCollapsed = usePanelStore((s) => s.toggleCollapsed)

    return (
        <div className="absolute z-50 flex justify-between p-2 h-full w-full"
            style={{
                pointerEvents: "none"
            }}>

            <FloatingButton onClick={toggleCollapsed} icon={CollapseIcon} title="Smanji" />

            <div className="flex p-0 m-0 flex-col justify-between">
                {/* zumiranje */}
                <div className="flex p-0 m-0 flex-col gap-2">
                    <FloatingButton onClick={zoomIn} icon={PlusIcon} title="Zumiraj" />
                    <FloatingButton onClick={zoomOut} icon={MinusIcon} title="Odzumiraj" />
                </div>

                {/* kontrole */}
                <div className="flex p-0 m-0 flex-col gap-2">
                    <FloatingButton onClick={center} icon={CenterIcon} title="Centriraj" />
                    {/* <FloatingButton onClick={onPan} icon={HandIcon} title="Pan" /> */}
                </div>
            </div>
        </div>
    )
}

export default OverlayControls