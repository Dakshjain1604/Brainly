export function Input({ onChange, placeholder}: {placeholder:string, onChange?: () => void}) {
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 m-2 opacity-100 bg-gray-200 border-gray-400 rounded-xl" onChange={onChange}></input>
    </div>
}