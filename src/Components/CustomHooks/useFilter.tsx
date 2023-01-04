const useFilter = (data: Array<any>, key: string) => {
    const details: any = typeof (data) === 'object' && data?.filter((d: any) => d.name.toLowerCase().match(key.toLowerCase()
));
    // theString.match(/^.*abc$/)
    if (key === "") {
        return data
    }
    // else if (details === flase) {
    //     return data
    // }
    return details;
};

export default useFilter;