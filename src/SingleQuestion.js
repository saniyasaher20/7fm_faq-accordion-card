export default function SingleQuestion({ id, question, answer }) {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#accordion-${id}`} aria-expanded="false" aria-controls={`accordion-${id}`}>
                        {question}
                    </button>
                </h2>
                <div id={`accordion-${id}`} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{answer}</div>
                </div>
            </div>
        </>
    )
}