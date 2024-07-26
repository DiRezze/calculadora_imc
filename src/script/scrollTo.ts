export const scrollTo = (ref:string) => {
    document.getElementById(ref)?.scrollIntoView({behavior: 'smooth'});
}