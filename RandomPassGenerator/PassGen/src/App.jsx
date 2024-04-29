import { useCallback, useEffect, useRef, useState } from "react";

function App() {
	const [len, setLen] = useState(1);
	const [num, setNum] = useState(false);
	const [char, setChar] = useState(false);
	const [pass, setPass] = useState("");

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

		if (num) str += "0123456789";
		if (char) str += "!@#$%^&*`~";

		for (let i = 1; i <= len; i++) {
			pass += str.charAt(Math.floor(Math.random() * str.length + 1));
		}
		setPass(pass);
	}, [len, num, char, setPass]);

	useEffect(() => {
		passwordGenerator();
	}, [len, num, char, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passReference.current?.select();
    passReference.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(pass);
  },[pass])

  const passReference = useRef(null);

	return (
		<div className="w-full h-screen bg-black flex flex-col gap-10 items-center">
			<h1 className="text-4xl text-center text-white">Password Generator</h1>
			<div className="w-[60vw] bg-zinc-800 rounded-md flex">
				<input
					type="text"
					value={pass}
					className="outline-none w-full py-1 px-3"
					placeholder="password"
					readOnly
          ref={passReference}
				/>
				<button onClick={() => copyPasswordToClipboard()} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
					Copy
				</button>
			</div>
			<div className="flex gap-3 justify-start w-[60vw] mx-auto ">
				<input
					type="range"
					min={1}
					max={20}
					value={len}
					className="cursor-pointer"
					onChange={(e) => setLen(e.target.value)}
				/>
				<label className="text-white"> length: {len}</label>
				<input type="checkbox" defaultChecked={num} id="numInput" onChange={(e) => setNum(prev => !prev)} />
        <label className="text-white">Numbers</label>
				<input type="checkbox" defaultChecked={char} id="CharInput" onChange={(e) => setChar(prev => !prev)} />
        <label className="text-white">Special Characters</label>
			</div>
		</div>
	);
}

export default App;
