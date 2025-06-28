
type FloatingButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onDrag?: React.DragEventHandler<HTMLButtonElement>;
    icon: React.ReactNode;
    title?: string;
};

function FloatingButton({ onClick, onDrag, icon, title }: FloatingButtonProps) {

    return (
        <button
            onClick={onClick}
            onDrag={onDrag}
            title={title}
            className="pointer-events-auto h-fit px-2 py-2 text-sm bg-neutral-950 text-white hover:bg-neutral-700 shadow rounded-none"
        >
            {icon}
        </button>
    );
}

export default FloatingButton;