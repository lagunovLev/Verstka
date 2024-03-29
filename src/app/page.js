import Image from 'next/image'

export default function Home() {
    return (
        <main className="">
            <div className="flex flex-row">
                <div className="bg-blue-950 h-screen w-80 relative flex-none">
                    <h1 className="text-6xl m-4">SEMS</h1>
                    <Image
                        src="https://avatars.mds.yandex.net/i?id=1a6935097611804deffeccdf9294cdfbc70834af-9152533-images-thumbs&n=13"
                        width="30"
                        height="30"
                        alt="Image"
                        layout="fixed"
                        className="inline-block ml-6 mb-2 mr-3"
                    />
                    <label>Flight orders</label><br/>

                    <Image
                        src="https://e7.pngegg.com/pngimages/587/702/png-clipart-computer-icons-clock-font-awesome-clock-angle-time.png"
                        width="30"
                        height="30"
                        alt="Image"
                        layout="fixed"
                        className="inline-block ml-6 mb-2 mr-3"
                    />
                    <label>Flight history</label><br/>

                    <Image
                        src="https://avatars.mds.yandex.net/i?id=9bfd3a16ecf16cf24c23ec4c5576f308f8422598-5254479-images-thumbs&n=13"
                        width="30"
                        height="30"
                        alt="Image"
                        layout="fixed"
                        className="inline-block ml-6 mb-2 mr-3"
                    />
                    <label>Staff members rating</label><br/>
                    <button className="w-4/5 border-solid border-2 border-white rounded-lg absolute p-1 bottom-5 left-7">
                        <Image
                            src="https://prorisuem.ru/foto/7422/strelka_risunok_44.webp"
                            width="30"
                            height="30"
                            alt="Image"
                            layout="fixed"
                            className="inline-block"
                        />
                        LOG OUT
                    </button>
                </div>
                <div className="bg-white w-screen">
                    <header className="flex">
                        <div className="border-solid border-black border-2 p-2 rounded-xl flex-auto my-5 ml-6">
                            <Image
                                src="https://w7.pngwing.com/pngs/254/829/png-transparent-computer-icons-magnifying-glass-magnifier-magnifying-glass.png"
                                width="30"
                                height="30"
                                alt="Image"
                                layout="fixed"
                                className="inline-block mr-2"
                            />
                            <label className="text-gray-500">Search</label>
                        </div>
                        <div className="p-2 rounded-xl flex-auto bg-blue-500 my-5 ml-6 justify-center flex">
                            <Image
                                src="https://avatars.mds.yandex.net/i?id=b696cc84e276ca35e1631ddd21bc9ca25643ed22-10160311-images-thumbs&n=13"
                                width="30"
                                height="30"
                                alt="Image"
                                layout="fixed"
                                className="inline-block mr-2"
                            />
                            <label className="text-white mt-1">TASKS</label>
                        </div>
                        <label className="text-gray-600 text-4xl ml-6 flex-auto my-5">12:15</label>
                        <div className="ml-6 my-7 flex-auto"><Image
                            src="https://avatars.mds.yandex.net/i?id=0d18ad8a7d1a969fabe8b3ded695d339776bb652-10805353-images-thumbs&n=13"
                            width="30"
                            height="30"
                            alt="Image"
                            layout="fixed"
                            className="inline-block"
                        /></div>
                    </header>

                    <hr className="h-px bg-gray-500 border-0"/>
                    <h1 className="m-5 text-black text-3xl">Staff members rating</h1>
                    <div className="flex mb-5">
                        <div className="bg-gray-400 p-3 rounded-2xl flex-initial ml-4">
                            <label className="text-white">RATING</label>
                        </div>
                        <div className="bg-blue-600 p-3 rounded-2xl flex-initial ml-4">
                            <label className="text-white">PERSONAL TOTAL</label>
                            <br/>
                            <label className="text-white">FLIGHT TIME</label>
                        </div>
                    </div>
                    <div className="relative flex">
                        <div className="border-solid border-2 border-gray-400 p-3 rounded-xl flex-initial ml-4">
                            <label className="text-gray-800">Date</label>
                        </div>
                        <div className="border-solid border-2 border-gray-400 p-3 rounded-xl flex-initial ml-4">
                            <label className="text-gray-800">Date</label>
                        </div>
                        <div className="bg-blue-600 p-3 rounded-xl flex-initial ml-4">
                            <label className="text-white">FIND</label>
                        </div>
                        <div className="border-solid border-2 border-gray-400 p-3 rounded-xl flex-initial absolute right-4">
                            <label className="text-black">Total scores: 4,8</label>
                            <label className="text-black ml-6">Total flight time: 534 minutes</label>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="shadow-a m-4 rounded-xl">
                            <div className="p-2.5 bg-gray-400 rounded-t-xl">
                                <label className="text-black">1</label>
                            </div>
                            <div className="p-2.5 rounded-b-xl">
                                <label className="text-black">1</label>
                                <hr className="my-2.5 h-px bg-gray-500 border-0"/>
                                <label className="text-black">1</label>
                            </div>
                        </div>
                        <div className="shadow-a m-4 rounded-xl">
                            <div className="p-2.5 bg-gray-400 rounded-t-xl">
                                <label className="text-black">2</label>
                            </div>
                            <div className="p-2.5 rounded-b-xl">
                                <label className="text-black">2</label>
                                <hr className="my-2.5 h-px bg-gray-500 border-0"/>
                                <label className="text-black">2</label>
                            </div>
                        </div>
                        <div className="shadow-a m-4 rounded-xl">
                            <div className="p-2.5 bg-gray-400 rounded-t-xl">
                                <label className="text-black">3</label>
                            </div>
                            <div className="p-2.5 rounded-b-xl">
                                <label className="text-black">3</label>
                                <hr className="my-2.5 h-px bg-gray-500 border-0"/>
                                <label className="text-black">3</label>
                            </div>
                        </div>
                        <div className="shadow-a m-4 rounded-xl">
                            <div className="p-2.5 bg-gray-400 rounded-t-xl">
                                <label className="text-black">4</label>
                            </div>
                            <div className="p-2.5 rounded-b-xl">
                                <label className="text-black">4</label>
                                <hr className="my-2.5 h-px bg-gray-500 border-0"/>
                                <label className="text-black">4</label>
                            </div>
                        </div>
                        <div className="shadow-a m-4 rounded-xl">
                            <div className="p-2.5 bg-gray-400 rounded-t-xl">
                                <label className="text-black">5</label>
                            </div>
                            <div className="p-2.5 rounded-b-xl">
                                <label className="text-black">5</label>
                                <hr className="my-2.5 h-px bg-gray-500 border-0"/>
                                <label className="text-black">5</label>
                            </div>
                        </div>
                        <div className="shadow-a m-4 rounded-xl">
                            <div className="p-2.5 bg-gray-400 rounded-t-xl">
                                <label className="text-black">6</label>
                            </div>
                            <div className="p-2.5 rounded-b-xl">
                                <label className="text-black">6</label>
                                <hr className="my-2.5 h-px bg-gray-500 border-0"/>
                                <label className="text-black">6</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
