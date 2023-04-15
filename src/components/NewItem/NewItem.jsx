import { useState } from "react";
import "./NewItem.css"

const PRIORITY = ['low', 'medium', 'high']

const NewItem = (props) => {
    const { addItem } = props
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')

    console.log(priority)

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSave = () => {
        if(!title) {
            return
        }
        const obj = {
            title,
            priority
        }
        addItem(obj)
        setTitle('')
        setPriority('')
    }

    return (
        <div className="new-item-card">
            <div className="checkbox" />
            <div className="form-container">
                <input placeholder="Type here..." value={title} onChange={handleInputChange} />
                <div className="badge-container">
                    {PRIORITY.map((p) => (
                        <div
                            key={p}
                            className={`p-badge ${p === priority && 'selected'}`}
                            onClick={() => setPriority(p)}
                        >
                            {p}
                        </div>
                    ))}
                </div>
                <div className="btn-container">
                    <button className="primary" onClick={handleSave}>Save</button>
                    <button>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default NewItem;
