/**
 * 接口编码示例：
 * 业务流程的流转全都依赖于接口对于数据的处理，所以接口的编码要求较高，请遵照以下几点：
 * 1. 接口的命名必须表达一定的语义，通常都以 “明确的动词” + “具体的业务”来命名
 *  1）创建新记录请使用 create（创建）作为开头
 *  2）删除记录情书用 delete（删除）作为开头
 *  3）获取数据请使用 query（查询）、get（获取）作为开头
 *  4）更新数据请使用 update（更新）、set（设置）作为开头
 *  5）验证数据请使用 verify（验证）作为开头
 *  6）当接口返回的数据结构为列表形式时，请使用 List（列表）、Items 作为结尾
 * 2. 请遵照 JSDoc 规范写明接口注释
 */
import Request from '@/utils/request';

const { api } = MS_HOSTS;
const request = new Request({ baseUrl: api });

/**
 * 接口功能描述
 * @param {参数类型} 参数名称 参数描述
 */
export const queryUserInfo = request({ });

export default {};
