import Home from "../PortfolioContainer/Home/Home";
import AboutMe  from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";

export const TOTAL_SCREENS = [
    {
        screen_name: "Accueil",
        component: Home,
    },
    {
        screen_name: "Me concernant",
        component: AboutMe,
    },
    {
        screen_name: "Parcours",
        component: Resume,
    },
    {
        screen_name: "Portfolio",
        component: Testimonial,
    },
]

export const GET_SCREEN_INDEX = (screen_name)=>{
    console.log(screen_name)
    if(!screen_name) return -1
    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i
    }
    return -1
}