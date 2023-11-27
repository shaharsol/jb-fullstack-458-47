export default class Cache {
    data: {
        key: string;
        content: object;
        when: Date;
    }[] = [];
    timeout: number = 1000 * 30;

    async getData(key: string) {
        const existingData = this.data.find(e => e.key === key);
        // if (existingData && moment(new Date()).subtract(existingData.when) < this.timeout ) {
        if (existingData) {
            console.log('CACHE HIT');
            return existingData.content;
        }
        const response = await fetch(key);
        const json = await response.json();
        this.setData(key, json);
        console.log('CACHE MISS');
        return this.data.find(e => e.key === key).content;
    }

    setData(key: string, content: object) {
        this.data.push({
            key,
            content,
            when: new Date()
        })
    }
}