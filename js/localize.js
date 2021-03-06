(function ($){
	/**
     * User options
     */
    const defaults = {
        delay: 200, //Game speed
        initialMap: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1], [-1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1], [-1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1], [-1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1], [-1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [-1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1], [-1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 'G', 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1], [-1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1], [-1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1], [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
        emptyMap: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1], [-1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1], [-1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1], [-1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1], [-1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1], [-1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1], [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1], [-1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1], [-1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1], [-1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1], [-1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1], [-1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1], [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1], [-1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1], [-1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1], [-1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, -1], [-1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, -1], [-1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1], [-1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1], [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]],
        neighberMap: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 6, 5, 6, 6, 5, 5, 5, 6, 6, 5, 6, -1, 6, 5, 6, 6, 5, 5, 5, 6, 6, 5, 6, -1, 6, 5, 6, 6, 5, 5, 5, 6, 6, 5, 6, -1], [-1, 5, -1, -1, -1, -1, 2, -1, -1, -1, -1, 5, -1, 5, -1, -1, -1, -1, 2, -1, -1, -1, -1, 5, -1, 5, -1, -1, -1, -1, 2, -1, -1, -1, -1, 5, -1], [-1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1], [-1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1], [-1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1], [-1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1], [-1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1], [-1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1], [-1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1], [-1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1], [-1, 6, 5, 6, 6, 6, 6, 6, 6, 6, 4, 3, 1, 3, 4, 6, 6, 6, 6, 6, 6, 6, 4, 3, 1, 3, 4, 6, 6, 6, 6, 6, 6, 6, 5, 6, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 6, 5, 6, 6, 5, 5, 5, 6, 6, 4, 3, 1, 3, 4, 6, 6, 5, 5, 5, 6, 6, 4, 3, 1, 3, 4, 6, 6, 5, 5, 5, 6, 6, 5, 6, -1], [-1, 5, -1, -1, -1, -1, 2, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, 2, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, 2, -1, -1, -1, -1, 5, -1], [-1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1], [-1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1], [-1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1], [-1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1], [-1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1], [-1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1], [-1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1], [-1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1], [-1, 6, 5, 6, 6, 6, 6, 6, 6, 6, 4, 3, 1, 3, 4, 6, 6, 6, 6, 6, 6, 6, 4, 3, 1, 3, 4, 6, 6, 6, 6, 6, 6, 6, 5, 6, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 0, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 6, 5, 6, 6, 5, 5, 5, 6, 6, 4, 3, 1, 3, 4, 6, 6, 5, 5, 5, 6, 6, 4, 3, 1, 3, 4, 6, 6, 5, 5, 5, 6, 6, 5, 6, -1], [-1, 5, -1, -1, -1, -1, 2, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, 2, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, 2, -1, -1, -1, -1, 5, -1], [-1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1], [-1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, -1, -1, -1, 5, -1, 6, -1], [-1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1, 6, -1, 6, -1, 5, 3, 5, -1, 6, -1, 6, -1], [-1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1, 6, -1, 6, -1, 3, 0, 3, -1, 6, -1, 6, -1], [-1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1, 6, -1, 6, -1, 4, 2, 4, -1, 6, -1, 6, -1], [-1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1, 6, -1, 5, -1, -1, 2, -1, -1, 5, -1, 6, -1], [-1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1, 6, -1, 6, 5, 5, 5, 5, 5, 6, -1, 6, -1], [-1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1], [-1, 6, 5, 6, 6, 6, 6, 6, 6, 6, 5, 6, -1, 6, 5, 6, 6, 6, 6, 6, 6, 6, 5, 6, -1, 6, 5, 6, 6, 6, 6, 6, 6, 6, 5, 6, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
    };

	$.fn.initMaze = function(_options){
		var _this = this,
			options = $.extend(defaults, _options),
			dir = {
				up: 'up',
				right: 'right',
				down: 'down',
				left: 'left'
			},

			holder = {}, //Game outer holder
			content = {}, //Game inner container

			//initial the setting of the maze matrix 
			matrix = defaults.initialMap,
			nextMatrix = $.extend(true,{},defaults.emptyMap),
			rowNum = defaults.initialMap.length,
			colNum = defaults.initialMap[0].length,

			//setting the game parmeter.
			nodesinGPoints = 0,
            selectedNode = 0,
			isGameOver = false,
			filterList = [];
            actionsList = [];
            movementList = [];

            //save results
            filterResult = [];

		resetGame();
		bind();
		/**
         * Restart the game by recreate all DOM elements.
         */
        function resetGame() {
            //Recreate DOM elements
            holder = $('<div>').addClass('holder2048');
            content = $('<div>').addClass('container').appendTo(holder);
            for (var i = 0; i < rowNum; i++) {
                for (var j = 0; j < colNum; j++) {
                    //Reset matrix
                    //This is for the borders of each cell.
                    $('<div>').addClass('box').attr({
		                levelValue: classifyBlock(matrix[i][j]),
		                value: matrix[i][j]
		            }).css({
		                left: j * 14 + "px",
		                top: i * 14 + "px",
		                opacity: 1
		            }).text(matrix[i][j]).appendTo(content);
                }
            }
            selectedNode = getSelectedNodeNum();
            $("#NodesinGPoints").text(nodesinGPoints);
            $("#SelectedNode").text(selectedNode);
            $("#movements").text(movementList.toString());
            $("#stepsNum").text(movementList.length+" Steps");
            //movementList = [];
            //Create the first box on board
            //createBox();
            //Insert game holder and anything to whoever calls this function
            _this.html(holder);
        }

        function getSelectedNodeNum(){
            if (filterResult.length!= 0){
                return filterResult.length;}
            else
            {
                return 695;
            }
        }

        function classifyBlock(itemValue){
        	if (itemValue == 'G'){
        		return -13;
        	}else if (itemValue == -1) {
        		return -1;
        	}else if (itemValue == 0){
        		return 0;
        	}else if (itemValue == 1){
        		return 2;
        	}else if (itemValue <= 5) {
        		return 4;
        	}else if (itemValue <= 10 ) {
        		return 8;
        	}else if (itemValue <= 20){
        		return 16;
        	}else if (itemValue <= 50){
        		return 32;
        	}else if (itemValue <= 80){
        		return 64;
        	}else if (itemValue <= 110){
        		return 128;
        	}else if (itemValue <= 160) {
        		return 256;
        	}else if (itemValue <= 240) {
        		return 512;
        	}else if (itemValue <= 320) {
        		return 1024;
        	}else if (itemValue <= 400) {
        		return 2048;
        	}else if (itemValue <= 500) {
        		return 4096;
        	}else{
        		return 8192;
        	}
        }
        /**
         * Bind keyboard and screen touch events to game
         */
        function bind() {
            $(window).keydown(function (event) {
                if (!isGameOver) {
                    if (event.which == 37) {
                        event.preventDefault();
                        gameRun(dir.left);
                        //alert("left");
                    } else if (event.which == 38) {
                        event.preventDefault();
                        //alert('up');
                        gameRun(dir.up);
                    } else if (event.which == 39) {
                        event.preventDefault();
                        //alert('right');
                        gameRun(dir.right);
                    } else if (event.which == 40) {
                        event.preventDefault();
                        //alert('down');
                        gameRun(dir.down);
                    }
                }
            });
            var touchStartClientX, touchStartClientY;
            document.addEventListener("touchstart", function (event) {
                if (event.touches.length > 1)
                    return;
                touchStartClientX = event.touches[0].clientX;
                touchStartClientY = event.touches[0].clientY;
            });
            document.addEventListener("touchmove", function (event) {
                event.preventDefault();
            });
            document.addEventListener("touchend", function (event) {
                if (event.touches.length > 0)
                    return;
                var dx = event.changedTouches[0].clientX - touchStartClientX;
                var absDx = Math.abs(dx);
                var dy = event.changedTouches[0].clientY - touchStartClientY;
                var absDy = Math.abs(dy);
                if (Math.max(absDx, absDy) > 10) {
                    if (absDx > absDy) {
                        if (dx > 0) {
                            //gameRun(dir.right);
                        } else {
                            //gameRun(dir.left);
                        }
                    } else {
                        if (dy > 0) {
                            //gameRun(dir.down);
                        } else {
                            //gameRun(dir.up);
                        }
                    }
                }
            });
        }

        /**
         * Game run
         * @param dir
         */
        function gameRun(dir) {
            if (isGameOver) {
                return;
            }
            matrix[30][30] = nodesinGPoints;
            if (run(dir)) {
                resetGame();
            }
            if (gameOver()) {
                isGameOver = true;
                alert("Game Over");
            }
        }

        function run(dir){
        	if (dir == 'right'){
        		//all nodes move 1 step towards left j-->j+1
        		for (i = 1; i < rowNum-1; i++) {
        			for (j = 1 ; j < colNum-1; j++){
        				if (matrix[i][j] != -1){
        					if (matrix[i][j+1] == -1){
        						nextMatrix[i][j] = nextMatrix[i][j] + matrix[i][j];
        					}
        					else if (matrix[i][j+1] >= 0){
        						nextMatrix[i][j+1] = matrix[i][j];
        					}
        				}
        			}
        		}
                movementList.push('right');
        	}else if (dir == 'left'){
        		//all nodes move 1 step towards left j-->j-1
        		for (i = 1; i < rowNum-1; i++) {
        			for (j = colNum-1 ; j > 0; j--){
        				if (matrix[i][j] != -1){
        					if (matrix[i][j-1] == -1){
        						nextMatrix[i][j] = nextMatrix[i][j] + matrix[i][j];
        					}
        					else if (matrix[i][j-1] >= 0){
        						nextMatrix[i][j-1] = matrix[i][j];
        					}
        				}
        			}
        		}
                movementList.push('left');
        	}else if (dir == 'up'){
        		//all nodes move 1 step towards left j-->j+1
        		for (i = rowNum-1; i > 0; i--) {
        			for (j = 1 ; j < colNum-1; j++){
        				if (matrix[i][j] != -1){
        					if (matrix[i-1][j] == -1){
        						nextMatrix[i][j] = nextMatrix[i][j] + matrix[i][j];
        					}
        					else if (matrix[i-1][j] >= 0){
        						nextMatrix[i-1][j] = matrix[i][j];
        					}
        				}
        			}
        		}
                movementList.push('up');
        	}else if (dir == 'down'){
        		//all nodes move 1 step towards left j-->j+1
        		for (i = 1; i < rowNum-1; i++) {
        			for (j = 1 ; j < colNum-1; j++){
        				if (matrix[i][j] != -1){
        					if (matrix[i+1][j] == -1){
        						nextMatrix[i][j] = nextMatrix[i][j] + matrix[i][j];
        					}
        					else if (matrix[i+1][j] >= 0){
        						nextMatrix[i+1][j] = matrix[i][j];
        					}
        				}
        			}
        		}
                movementList.push('down');
        	}
            else {
                return false;
            }
        	matrix = nextMatrix;
        	nodesinGPoints = matrix[30][30]
        	matrix[30][30] = 'G';
        	nextMatrix = $.extend(true, {},defaults.emptyMap);
        	return true;
        }

        function gameOver(){
        	return false;
        }
        $('#Submit').click(function(){
            //Some code
            filterList = $('#observationsList').val().split(',');
            actionsList = $('#actionsList').val().split(',');
            if (filterList== '' && actionsList == ''){
                alert ('Please insert the vaild value');
            }
            else if (filterList.length == 1){
                setFilterStart(filterList[0]);
            }
            else if (filterList.length == actionsList.length+1){
                setFilterStart(filterList[0]);
                for (var i = 1; i< filterList.length; i++){
                    for (var j = 0; j<actionsList.length;j++){
                        var templeResultList = [];
                        for (var index = filterResult.length - 1; index >= 0; index--) {
                            if (setFilterSequence(actionsList[j], filterList[i], filterResult[index][0],filterResult[index][1]) == true){
                                templeResultList.push(filterResult[index]);
                            }
                        }
                        filterResult = templeResultList;
                    }
                }
            }
            else{
                alert('error');
            }
            for (var i = filterResult.length-1; i >= 0; i--){
                var row_f = filterResult[i][0];
                var col_f = filterResult[i][1];
                nextMatrix[row_f][col_f] = 1;
            }
            matrix = nextMatrix;
            nodesinGPoints = matrix[30][30]
            matrix[30][30] = 'G';
            //reset the initial
            nextMatrix = $.extend(true, {},defaults.emptyMap);
            filterList = [];
            actionsList = [];
            resetGame();
        });

        function setFilterStart(snItem){
            for (var i = defaults.neighberMap.length - 1; i >= 0; i--) {
                for (var j = defaults.neighberMap[i].length - 1; j >= 0; j--) {
                    if (defaults.neighberMap[i][j] == snItem){
                        filterResult.push([i,j]);
                    }
                }
            }
            return true;
        }

        function setFilterSequence(actionDir, nextObervation, row_t, col_t){
            if (actionDir == 'right'){
                return (defaults.neighberMap[row_t][col_t+1]==nextObervation);
            }
            else if (actionDir == 'left'){
                return (defaults.neighberMap[row_t][col_t-1]==nextObervation);
            }
            else if (actionDir == 'up'){
                return (defaults.neighberMap[row_t-1][col_t]==nextObervation);
            }
            else if (actionDir == 'down'){
                return (defaults.neighberMap[row_t+1][col_t]==nextObervation);
            }
            return false;
        }

    }
})(jQuery);