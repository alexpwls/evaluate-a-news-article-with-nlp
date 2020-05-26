import { checkURL } from '../client/js/checkValidUrl'

test('Check if checkURL is a function', async () => {
    expect(typeof checkURL).toBe("function");
});

test('Check if URL is valid', () => {
    const url = "https://techcrunch.com/2020/05/22/startup-battlefield-is-going-virtual-with-techcrunch-disrupt-2020/";
    const response = checkURL(url);
    expect(response).toBe(true);
});

test('Check if URL is not valid', () => {
    const url = "Alex is cool";
    const response = checkURL(url);
    expect(response).toBe(false);
});