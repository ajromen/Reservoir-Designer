import { useEffect, useRef } from "react";
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelHandle } from "react-resizable-panels";
import usePanelStore from "../../stores/usePanelStore";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function Panels({ children }: { children: React.ReactNode }) {
    const leftPanelRef = useRef<ImperativePanelHandle>(null);
    const rightPanelRef = useRef<ImperativePanelHandle>(null);

    const isCollapsed = usePanelStore((s) => s.isCollapsed);


    useEffect(() => {
        const left = leftPanelRef.current;
        const right = rightPanelRef.current;

        if (!left || !right) return;

        const leftCollapsed = left.isCollapsed();
        const rightCollapsed = right.isCollapsed();

        if (leftCollapsed && rightCollapsed) {
            left.expand();
            right.expand();
        }
        else {
            left.collapse();
            right.collapse();
        }
    }, [isCollapsed]);

    return (
        <div className="w-screen h-screen overflow-hidden relative">

            {/*panels*/}
            <PanelGroup direction="horizontal" className="w-full h-full">
                {/* left */}
                <Panel ref={leftPanelRef}
                    defaultSize={18}
                    minSize={15}
                    maxSize={40}
                    collapsible
                    className="bg-neutral-950">
                    <LeftPanel />
                </Panel>

                <PanelResizeHandle className="bg-neutral-900 w-0.5" />

                {/* Canvas panel */}
                <Panel>
                    {children}
                </Panel>

                <PanelResizeHandle className="bg-neutral-900 w-0.5" />

                {/* right */}
                <Panel ref={rightPanelRef}
                    defaultSize={18}
                    minSize={15}
                    maxSize={40}
                    collapsible
                    className="bg-neutral-950">
                    <RightPanel />
                </Panel>
            </PanelGroup>


        </div>
    );
}

export default Panels;