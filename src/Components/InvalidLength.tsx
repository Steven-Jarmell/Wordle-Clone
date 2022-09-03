type Props = {
    show: boolean;
}

const InvalidLength = ( { show }: Props) => {
    return (
        <div className={`invalid-length-container show-invalid-length-${show}`}>
            <div className="invalid-length-modal">
                <p>Invalid Length</p>
            </div>
        </div>
    )
}

export default InvalidLength;