import Image from "next/image";
import back from "../public/images/back.png"
import styles from "../styles/Profile.module.css";
import Posts from "@/Components/Posts";

export default function Profile() {
    return (
        <main className="">
            <div className={styles.profileAccount}>
                <div className=" relative">
                    <Image className={styles.banner} alt="james" src={back} />
                    <div className={styles.profile_informations}>
                        <Image className={styles.profilePicture} alt="james" src={back} />
                        <div className="mb-8">
                            <h1>James</h1>
                            <span>@joel</span>
                        </div>

                    </div>
                </div>

                <div className={styles.main_content}>
                    <div className={styles.leftSide}>
                        <div>
                            <h1>About me</h1>
                            <p>My name is James, I'm a web developper</p>
                        </div>
                        <div className={styles.personnal_informations}>
                            <div className="flex gap-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p>Paris</p>
                            </div>
                            <div className="flex gap-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>

                                <p>joined June 2022</p>
                            </div>
                            <div className="flex gap-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>

                                <p>Working at Tim horton</p>
                            </div>
                            <div className="flex gap-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>

                                <p>Single</p>
                            </div>

                            <div className={styles.medias}>
                                <div className="flex justify-between">
                                <h1>Photos and Videos</h1>
                                <button className=" text-blue-600">See All</button>
                                </div>

                                <div className={styles.photos_and_videos}>
                                    <Image alt="test" src={back}/>
                                    <Image alt="test" src={back}/>
                                    <Image alt="test" src={back}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.profile_data}>
                            <div>
                                <h1>Post</h1>
                                <span>100</span>
                            </div>

                            <div>
                                <h1>Followers</h1>
                                <span>100</span>
                            </div>
                            <div>
                                <h1>Followers</h1>
                                <span>100</span>
                            </div>
                            <div>
                                <h1>Followers</h1>
                                <span>100</span>
                            </div>
                            <div>
                                <h1>Followers</h1>
                                <span>100</span>
                            </div>



                        </div>

                        <div>
                            <Posts/>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    );
}
