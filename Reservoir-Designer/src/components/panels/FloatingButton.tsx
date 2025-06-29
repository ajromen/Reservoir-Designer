type FloatingButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onHoldStart?: () => void;
    onHoldEnd?: () => void;
    icon: React.ReactNode;
    title?: string;
};

function FloatingButton({ onClick, onHoldStart, onHoldEnd, icon, title }: FloatingButtonProps) {
    return (
        <button
            onClick={onClick}
            onMouseDown={onHoldStart}
            onMouseUp={onHoldEnd}
            onMouseLeave={onHoldEnd}
            onTouchStart={onHoldStart}
            onTouchEnd={onHoldEnd}
            title={title}
            className="pointer-events-auto h-fit px-2 py-2 text-sm bg-neutral-950 text-white hover:bg-neutral-700 shadow rounded-none"
        >
            {icon}
        </button>
    );
}

export default FloatingButton;
