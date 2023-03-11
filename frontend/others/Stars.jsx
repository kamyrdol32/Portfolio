import React from "react";

export default function Stars(props) {
    return (
        <div className="flex items-center m-3">
            {/* Light stars */}
            {[...Array(props.stars)].map((star, i) => (
                <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 12.804L5.158 15.4l.894-5.662L1.1 6.6l5.702-.823L10 1l2.198 5.377 5.702.823-4.054 4.038.894 5.662L10 12.804z"
                        clipRule="evenodd"
                    />
                </svg>
            ))}


            {/* Dark stars */}
            {[...Array(5 - props.stars)].map((star, i) => (
                <svg
                    key={i}
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 12.804L5.158 15.4l.894-5.662L1.1 6.6l5.702-.823L10 1l2.198 5.377 5.702.823-4.054 4.038.894 5.662L10 12.804z"
                        clipRule="evenodd"
                    />
                </svg>
            ))}

        </div>
    );
}