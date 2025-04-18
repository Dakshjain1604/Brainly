
interface InputProps {
    placeholder: string;
    reference?: any
}

export function Input({ placeholder, reference }: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} type="text" className="px-4 py-2 m-2 opacity-100 bg-gray-200 border-gray-400 rounded-xl" onChange={onchange}></input>
    </div>
}