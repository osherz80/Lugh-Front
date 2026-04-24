const useJobCard = () => {
    const onLikeClick = () => {
        console.log('like');
    }

    const onTagClick = (tag: string) => {
        console.log(tag);
    }

    const onApplyClick = () => {
        console.log('apply');
    }

    return {
        onTagClick,
        onApplyClick,
        onLikeClick
    }
}

export default useJobCard