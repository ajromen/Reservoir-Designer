import useCanvasStore from "../../stores/useCanvasStore";
import Input from "./Input";

function TopInput(
    {
        inputLength = 0.1,
        inputRadius = 0.05,
        flipSides = false }:
        {
            inputLength?: number,
            inputRadius?: number,
            flipSides?: boolean
        }) {

    const length = useCanvasStore((s) => s.length);
    const radius = useCanvasStore((s) => s.radius);
    const isHorizontal = useCanvasStore((s) => s.isHorizontal);
    const color = useCanvasStore((s) => s.color);

    let positionX = flipSides ? -length / 2 : length / 2;

    return (<>
        <Input
            position={[positionX, radius * 0.8, 0]}
            color={color}
        />
    </>)
}

export default TopInput;