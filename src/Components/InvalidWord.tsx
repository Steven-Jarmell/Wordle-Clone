type Props = {
    show: boolean;
}

const InvalidWord = ( { show }: Props) => {
    return (
        <div className={`invalid-word-container show-invalid-${show}`}>
            <div className="invalid-word-modal">
                <p>Invalid Word</p>
            </div>
        </div>
    )
}

export default InvalidWord;