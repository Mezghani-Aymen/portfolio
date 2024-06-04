export const fetchData = async (name) => {
    try {
        const fileName = name === "Projects" ? "Projects" : "Services";
        const importedData = await import(`../assets/data/${fileName}.json`);
        return importedData.default;
    } catch (error) {
        console.error("Error loading JSON file:", error);
        throw error;
    }
};

export const fetchImages = async (data) => {
    const imagesArray = [];
    for (const value of data) {
        try {
            const image = await import(`../assets/images/${value.image}`);
            imagesArray.push(image.default);
        } catch (error) {
            console.error("Error fetching image :", error);
        }
    }
    return imagesArray
};

export const fetchLogo = async (data, name) => {
    const iconObject = {};
    try {
        const list = name === "Projects" ? Object.keys(data) : data
        const iconFileContext = require.context('../assets/images/icons/');
        const iconList = iconFileContext.keys().map(key => key.substring(2));
        iconList.forEach(async item => {
            const index = list.indexOf(item.substring(0, item.lastIndexOf('.')));
            const condition = name === "Projects" ? index !== -1 : index === -1
            if (condition) {
                const icon = await import(`../assets/images/icons/${item}`);
                iconObject[item.substring(0, item.lastIndexOf('.'))] = icon.default;
            }
        });
    }
    catch (error) {
        console.error("Error fetching image :", error);
    }

    return iconObject
};
