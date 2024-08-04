import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        // if it is not wrapped with Html component then the website will break
        <Html>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-[10vw] h-[10vh] rounded-full">
                    Loading...
                </div>
            </div>
        </Html>
    )
}
export default Loader