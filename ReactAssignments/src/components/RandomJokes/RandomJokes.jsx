import React, {useEffect} from 'react'
import "./RandomJokes.css"
import {useLoaderData} from 'react-router-dom';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import {formatNumber} from "./formatNumber.js";

function RandomJokes() {

    const {jokes, errorData} = useLoaderData()
    console.log('jokes was fetched as ' + errorData)
    if (errorData || !jokes) {
        return < ErrorHandler message={errorData}/>
    }
    const currentDate = new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const currentTime = new Date().toLocaleString("en-US", {
        timeStyle: "short"
    });
    let maxWords = 15;
    let joke = jokes.data.content
    let words = joke.split(" ")

    if (words.length >= maxWords)
        joke = words.slice(0, maxWords).join(' ') + '...';


    const viewCount = formatNumber();
    const commentsCount = formatNumber();
    const likesCount = formatNumber();
    const retweetCount = formatNumber();
    const savedCount = formatNumber();

    console.table([viewCount, commentsCount, likesCount, retweetCount, savedCount])


    return (
        <>
            <div className='flex justify-center items-center bg-cover bg-center h-screen'
                 style={{backgroundImage: "url('twitter-birds-stock-1024x576.jpg')"}}>
                <div className="flex h-[350px] width-[600px] bg-black text-white justify-center rounded-xl ">
                    <div className="w-[600px] h-[320px] text-lg font-bold">
                        <div>
                            <button className="px-4 py-4">
                                <svg class="h-5 w-5 text-gray-100" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                                </svg>
                            </button>
                            Post
                            <div className="flex justify-start my-2">
                                <img
                                    src="jS8I28PL_400x400.jpg"
                                    className="w-14 h-14 rounded-full mx-4"
                                    alt=""
                                />
                                <div className="px-1 w-full">
                                    <div className="flex justify-between items-start">
                                        <div className="flex justify-start">Elon Musk
                                            <img width="30" height="10"
                                                 src="https://img.icons8.com/color/48/verified-badge.png"
                                                 alt="verified-badge"/>
                                        </div>
                                        <button className="font-bold mx-3">
                                            •••
                                        </button>
                                    </div>
                                    <div className="text-sm font-normal">@elonmusuk</div>
                                </div>
                            </div>
                            <div className="px-5 py-2 font-semibold text-[17px]">
                                <div className="p-5text-left">{joke}</div>
                                <div className="my-4 font-extralight text-slate-50">
                                    {`${currentTime} • ${currentDate} •`} <b>{`${viewCount} `}</b>{" "}
                                    Views
                                </div>
                                <div className=" font-extralight border border-x-transparent border-gray-[5]"
                                     style={{position: 'relative'}}>
                                    <div className="p-4 flex flex-row space-x-14">
                                        <div className="flex items-center space-x-1">
                                            <svg className="h-5 w-5 text-gray-50" fill="none" viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                            </svg>
                                            <span>{commentsCount}</span></div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="h-5 w-5 text-gray-50" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <polyline points="17 1 21 5 17 9"/>
                                                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                                                <polyline points="7 23 3 19 7 15"/>
                                                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                                            </svg>
                                            <span>{retweetCount}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="h-5 w-5 text-gray-50" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <path
                                                    d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7"/>
                                            </svg>
                                            <span>{likesCount}</span></div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="h-5 w-5 text-gray-50" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"/>
                                            </svg>
                                            <span>{savedCount}</span></div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="h-5 w-5 text-gray-50" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                 strokeLinejoin="round">
                                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                                                <polyline points="16 6 12 2 8 6"/>
                                                <line x1="12" y1="2" x2="12" y2="15"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className=" text-slate-50 text-sm text-center">&copy; chai aur code
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="logo rounded-xl"
                    onClick={() => window.open("https://chaicode.com/", "_blank")}
                ></div>
            </div>
        </>
    );
}

export default RandomJokes


export const callingRandomJokes = async () => {
    try {
        const response = await fetch(import.meta.env.VITE_RANDOM_JOKES_URI);
        const json = await response.json()

        if (!json.success)
            throw new Error(`HTTP error!! ${JSON.statusCode}`);

        return {jokes: json, errorData: null}

    } catch (error) {
        return {jokes: null, errorData: 'Something went wrong'};
    }


}