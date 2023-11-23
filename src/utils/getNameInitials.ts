export const InitialsFromName = (name: string) => {
    const nameArray = name.split(" ");
    return nameArray.map((word) => word[0]).join("").toUpperCase();
};