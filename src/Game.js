import React from 'react';
import ReactDOM from 'react-dom';

export default class Game extends React.Component {

    /**
     * Beginner: 10 mines, 8x8 board
     * Intermediate: 20 mines, 12x12 board
     * Expert: 40 mines, 16x16 board
     */

    state = {
        height: 8,
        width: 8,
        mines: 10,
    };

    handleGameStart = () => {
        let difficulty = document.querySelector("#level_select");
        if (difficulty.value === "beginner") {
            this.setState({
                height: 8,
                width: 8,
                mines: 10,
            });
        }
        if (difficulty.value === "intermediate") {
            this.setState({
                height: 12,
                width: 12,
                mines: 20,
            });
        }
        if (difficulty.value === "expert") {
            this.setState({
                height: 16,
                width: 16,
                mines: 40,
            });
        }
    }

    render() {
        const { height, width, mines } = this.state;
        return (
            <div className="relative bg-gray-50 overflow-hidden">
                <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
                    <div className="relative h-full max-w-screen-xl mx-auto">
                        <svg
                        className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                        width="404"
                        height="784"
                        fill="none"
                        viewBox="0 0 404 784"
                        >
                        <defs>
                            <pattern
                            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                            >
                            <rect
                                x="0"
                                y="0"
                                width="4"
                                height="4"
                                className="text-gray-200"
                                fill="currentColor"
                            />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="784"
                            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                        />
                        </svg>
                        <svg
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width="404"
                        height="784"
                        fill="none"
                        viewBox="0 0 404 784"
                        >
                        <defs>
                            <pattern
                            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                            >
                            <rect
                                x="0"
                                y="0"
                                width="4"
                                height="4"
                                className="text-gray-200"
                                fill="currentColor"
                            />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="784"
                            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                        />
                        </svg>
                    </div>
                </div>
                <div className="relative max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                            Minesweeper
                        </h1>
                        <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-600">
                            You are presented with a board of squares. Some squares contain mines and others don't. If you click a square containing a mine, you lose. If you click all the squares that don't have mines, you win.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}