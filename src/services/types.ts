export interface SoundItemRequest {
    _id: string;
    title: string;
    categoryName: string;
    soundCategoryName: string;
    filename: string;
    soundData: string;
    __v: number;
}


export interface SoundItem extends SoundItemRequest {
    isLoaded?: boolean,
    color?: string,
}
