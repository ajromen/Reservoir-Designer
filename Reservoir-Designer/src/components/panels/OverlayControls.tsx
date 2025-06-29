import { useRef } from "react";
import { CenterIcon, CollapseIcon, MinusIcon, PlusIcon } from "../../assets/svg-images";
import useCanvasStore from "../../stores/useCanvasStore";
import usePanelStore from "../../stores/usePanelStore";
import FloatingButton from "./FloatingButton";



function OverlayControls() {

    const zoomIn = useCanvasStore((s) => s.zoomIn);
    const zoomOut = useCanvasStore((s) => s.zoomOut);
    const center = useCanvasStore((s) => s.center);
    const toggleCollapsed = usePanelStore((s) => s.toggleCollapsed)

    const zoomInInterval = useRef<ReturnType<typeof setInterval> | null>(null);
    const zoomOutInterval = useRef<ReturnType<typeof setInterval> | null>(null);

    const startZoomIn = () => {
        if (zoomInInterval.current) return;
        zoomInInterval.current = setInterval(zoomIn, 50);
    };
    const stopZoomIn = () => {
        if (zoomInInterval.current) {
            clearInterval(zoomInInterval.current);
            zoomInInterval.current = null;
        }
    };

    const startZoomOut = () => {
        if (zoomOutInterval.current) return;
        zoomOutInterval.current = setInterval(zoomOut, 50);
    };
    const stopZoomOut = () => {
        if (zoomOutInterval.current) {
            clearInterval(zoomOutInterval.current);
            zoomOutInterval.current = null;
        }
    };

    return (
        <div className="absolute z-50 flex justify-between p-2 h-full w-full"
            style={{
                pointerEvents: "none"
            }}>

            <FloatingButton onClick={toggleCollapsed} icon={CollapseIcon} title="Smanji" />

            <div className="flex p-0 m-0 flex-col justify-between">
                {/* zumiranje */}
                <div className="flex p-0 m-0 flex-col gap-2">
                    <FloatingButton
                        onClick={zoomIn}
                        onHoldStart={startZoomIn}
                        onHoldEnd={stopZoomIn}
                        icon={PlusIcon}
                        title="Zumiraj"
                    />
                    <FloatingButton
                        onClick={zoomOut}
                        onHoldStart={startZoomOut}
                        onHoldEnd={stopZoomOut}
                        icon={MinusIcon}
                        title="Odzumiraj"
                    />
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