/**
 * Generates initials from the provided name.
 * @param name - The full name to extract initials from.
 * @returns The uppercase initials derived from the name.
 */
export const GetInitialsFromName = (name: string): string => {
    // Split the name into an array of words
    const nameArray = name.split(" ")
  
    // Extract the first character of each word and join them to form initials
    return nameArray.map((word) => word[0]).join("").toUpperCase()
  }
  