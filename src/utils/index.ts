// 日期格式函数

export function formatDateToChinese(dateString: string): string {
    // 将输入的日期字符串解析为 Date 对象
    const date = new Date(dateString);

    // 提取日期和时间部分
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份从 0 开始，需要加 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // 格式化为 "年月日时分秒" 格式
    return (
        `${year}年${month.toString().padStart(2, '0')}月${day.toString().padStart(2, '0')}日` +
        `${hours.toString().padStart(2, '0')}时${minutes.toString().padStart(2, '0')}分${seconds
            .toString()
            .padStart(2, '0')}秒`
    );
}

export function formateState(state: number) {
    if (state === 1) {
        return '在职';
    } else if (state === 2) {
        return '试用期';
    } else {
        return '离职';
    }
}