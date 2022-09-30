import type {NextPage} from 'next'
import {VHead} from "../components/VHead.component";
import Image from 'next/image'
import {BaseSyntheticEvent} from "react";

const Home: NextPage = () => {

    const fontLetters = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ";
    const normalLetters = "abcdefghijklmnopqrstuvwxyz";

    function handleInput(event: BaseSyntheticEvent) {
        const target = event.target;
        const value = target.value;
        const split = value.toLowerCase().split("");
        const result = split.map((letter: string) => {
            const indexOf = normalLetters.indexOf(letter);
            if (indexOf !== -1) {
                return fontLetters.charAt(indexOf);
            }

            return letter;
        });

        const outputElement: Element | null = document.querySelector("#output-form");
        if (outputElement) {
            outputElement.textContent = result.join("");
        }
    }

    function handleClick(event: BaseSyntheticEvent) {
        const outputElement: Element | null = document.querySelector("#output-form");
        if (!outputElement) {
            return;
        }

        const value: string | null = outputElement.textContent;
        if (!value) {
            return;
        }

        // Copy to clipboard
        const clipboard = navigator.clipboard;
        clipboard.writeText(value).then(() => {
            alert(`Copied ${value} to clipboard!`);
        }).catch(ignored => {
            alert(`Failed to copy ${value} to clipboard!`);
            console.error(ignored);
        });
    }

    return (
        <>
            <VHead/>
            <main className="dp-flex fd-col jc-center ai-center">
                <section id="main-section" className="dp-flex fd-col jc-center">
                    <div className="text-align-center">
                        <Image
                            alt="MC-Logo"
                            src="/src/img/mc-logo.png"
                            width={50}
                            height={50}
                        />
                    </div>
                    <h2>MC Font Converter</h2>
                </section>
                <section id="convert-section">
                    <div className="container" id="main-section">
                        <div className="row jc-flex-start">
                            <div className="col-24">
                                <h4>Type Text To Convert</h4>
                            </div>
                            <div className="col-24 col-m-12">
                                <textarea name="input" id="input-form" onInput={handleInput}/>
                            </div>
                            <div className="col-24 col-m-12" onClick={handleClick}>
                                <textarea name="output" id="output-form" disabled/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home
