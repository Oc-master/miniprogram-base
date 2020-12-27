/**
 * 接口编码示例：
 * 业务流程的流转全都依赖于接口对于数据的处理，所以接口的编码要求较高，请遵照以下几点：
 * 1. 接口的命名必须表达一定的语义，通常都以 “明确的动词” + “具体的业务”来命名
 *  1）获取数据请使用 query（查询）、get（获取）作为开头
 *  2）更新数据请使用 update（更新）、set（设置）作为开头
 *  3）验证数据请使用 verify（验证）作为开头
 *  4）当接口返回的数据结构为列表形式时，请使用 List（列表）作为结尾
 * 2. 请遵照 JSDoc 规范写明接口注释
 */
import Request from '@/utils/request';

const { api } = mc.$hosts;
const request = new Request({ baseUrl: api });

/**
 * 接口功能描述
 * @param {参数类型} 参数名称 参数描述
 */
export const queryUserInfo = request({ });

export const updateUserInfo = request({ });

export const verifyUser = request({ });

export const queryCarSeriesList = request({ });
