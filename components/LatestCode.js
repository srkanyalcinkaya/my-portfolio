import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "../lib/getLatestRepos";


export default function LatestCode({ }) {
    const [repos, setRepos] = useState();

    let token = "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";
    const repositories = async () => {
        await getLatestRepos(token).then((data) => setRepos(data))
    };

    useEffect(() => {
        repositories()
    }, [])



    return (
        <section className="  pb-40">
            <div className="w-full mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 ">
                    <h1 className="text-3xl lg:text-5xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left">
                        Latest Code
                    </h1>

                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://github.com/srkanyalcinkaya`}
                        className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-up-right-square"
                            stroke="4"
                            strokeWidth="4"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                            />
                        </svg>
                        <p>View GitHub</p>
                    </a>
                </div>
            </div>
            {!repos && <div className="w-full flex items-center justify-center mt-20">
                <svg className="animate-spin  mr-3 h-20  w-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:mt-10 gap-y-20">
                {/* Single github Repo */}

                {repos &&
                    repos.map((latestRepo, idx) => (
                        <GithubRepoCard latestRepo={latestRepo} key="idx" />
                    ))}
            </div>
        </section>
    );
}

const GithubRepoCard = ({ latestRepo }) => {
    return (
        <div className="github-repo">
            <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                {latestRepo.name}
            </h1>
            <p className="text-base font-normal my-4 text-gray-500">
                {latestRepo.description}
            </p>
            <a
                href={latestRepo.clone_url}
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
            >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                    &rarr;
                </div>
            </a>
        </div>
    );
};