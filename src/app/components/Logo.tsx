import * as React from 'react'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Logo({ ...rest }: LogoProps) {
  return (
    <svg
      width={196}
      height={31}
      viewBox="0 0 196 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.224 23.564c-1.28 0-1.92-.341-1.92-1.024V5.292H1.216c-.341 0-.587-.128-.736-.384-.15-.256-.224-.661-.224-1.216V2.7c0-.555.075-.96.224-1.216.15-.256.395-.384.736-.384h15.136c.341 0 .587.128.736.384.15.256.224.661.224 1.216v.992c0 .555-.075.96-.224 1.216-.15.256-.395.384-.736.384h-5.088V22.54c0 .683-.64 1.024-1.92 1.024h-1.12zm10.01 0c-1.302 0-1.953-.235-1.953-.704 0-.085.043-.277.128-.576l7.04-20.576c.17-.448.779-.672 1.824-.672h1.664c1.067 0 1.675.224 1.824.672l7.04 20.576c.064.213.096.405.096.576 0 .47-.533.704-1.6.704H32.89c-1.045 0-1.642-.224-1.792-.672l-1.28-3.904h-7.552l-1.28 3.904c-.15.448-.64.672-1.472.672h-1.28zm10.207-8.8l-1.824-5.696c-.15-.427-.31-1.11-.48-2.048h-.128c-.021.128-.074.416-.16.864-.064.427-.17.821-.32 1.184l-1.888 5.696h4.8zm15.69 8.992c-1.515 0-2.838-.15-3.969-.448-1.13-.299-2.016-.683-2.656-1.152-.597-.405-.896-.81-.896-1.216 0-.32.118-.704.352-1.152.235-.448.512-.843.832-1.184.32-.341.587-.512.8-.512.128 0 .427.128.896.384.683.341 1.302.608 1.856.8.555.192 1.206.288 1.952.288.832 0 1.536-.16 2.112-.48.598-.341.896-.928.896-1.76 0-.683-.277-1.216-.832-1.6-.533-.405-1.408-.853-2.624-1.344l-1.472-.64c-1.344-.64-2.4-1.43-3.168-2.368-.768-.96-1.152-2.315-1.152-4.064 0-1.45.352-2.656 1.056-3.616a6.243 6.243 0 012.816-2.144c1.152-.47 2.39-.704 3.712-.704 1.088 0 2.07.117 2.944.352.896.213 1.6.501 2.112.864.47.341.704.683.704 1.024 0 .299-.096.672-.288 1.12a4.968 4.968 0 01-.704 1.184c-.277.32-.533.48-.768.48-.106 0-.288-.053-.544-.16a9.967 9.967 0 00-.608-.256 7.54 7.54 0 00-2.4-.384c-1.11 0-1.888.181-2.336.544-.426.363-.64.779-.64 1.248 0 .555.15 1.013.448 1.376.299.363.662.661 1.088.896.427.213 1.056.501 1.888.864 1.216.512 2.208 1.003 2.976 1.472.768.448 1.43 1.11 1.984 1.984.576.853.864 1.952.864 3.296 0 1.643-.352 2.987-1.056 4.032-.682 1.045-1.568 1.803-2.656 2.272-1.088.47-2.261.704-3.52.704zm11.903-.192c-1.28 0-1.92-.341-1.92-1.024V2.06c0-.683.64-1.024 1.92-1.024h1.12c1.28 0 1.92.341 1.92 1.024v8.576l.128.032 5.568-9.024c.235-.405.875-.608 1.92-.608h1.504c1.195 0 1.792.16 1.792.48 0 .192-.085.416-.256.672l-6.176 9.472 7.008 10.752c.17.256.256.48.256.672 0 .32-.597.48-1.792.48H67.17c-1.066 0-1.717-.203-1.952-.608l-6.016-9.728-.128.032v9.28c0 .683-.64 1.024-1.92 1.024h-1.12z"
        fill="#B4ACF9"
      />
      <path
        d="M83.368 18.156c-.555 0-.982-.203-1.28-.608l-3.936-7.04c-.278-.47-.512-.885-.704-1.248l-.128.032V22.54c0 .683-.64 1.024-1.92 1.024h-.928c-1.28 0-1.92-.341-1.92-1.024V2.06c0-.683.64-1.024 1.92-1.024h1.696c1.024 0 1.696.288 2.016.864l5.312 9.472.32.544.288-.544L89.512 1.9c.32-.576.992-.864 2.016-.864h1.664c1.28 0 1.92.341 1.92 1.024v20.48c0 .683-.64 1.024-1.92 1.024h-.928c-1.28 0-1.92-.341-1.92-1.024V9.292l-.128-.032c-.192.363-.427.779-.704 1.248l-3.936 7.04c-.299.405-.726.608-1.28.608h-.928zm20.025 5.6c-1.643 0-2.848-.427-3.617-1.28-.746-.853-1.12-1.984-1.12-3.392 0-1.707.62-3.125 1.857-4.256 1.258-1.13 3.701-1.696 7.328-1.696v-1.056c0-.619-.203-1.077-.608-1.376-.384-.299-1.014-.448-1.888-.448-.726 0-1.366.075-1.92.224-.534.15-1.014.32-1.44.512-.427.192-.672.288-.736.288-.214 0-.448-.16-.704-.48a5.532 5.532 0 01-.672-1.088c-.193-.427-.288-.757-.288-.992 0-.363.266-.715.8-1.056.533-.341 1.269-.619 2.208-.832.938-.213 1.973-.32 3.104-.32 2.41 0 4.16.48 5.248 1.44 1.088.939 1.632 2.24 1.632 3.904v6.016c0 .981.021 1.728.064 2.24.064.512.138 1.077.224 1.696.064.277.096.512.096.704 0 .341-.438.597-1.312.768-.854.17-1.611.256-2.272.256-.384 0-.651-.15-.8-.448a5.2 5.2 0 01-.352-1.024 81.547 81.547 0 01-.128-.736c-.128.235-.384.544-.768.928-.384.363-.918.704-1.6 1.024-.683.32-1.462.48-2.336.48zm1.568-3.744c.597 0 1.162-.192 1.696-.576a3.511 3.511 0 001.184-1.44v-1.76c-2.987 0-4.48.79-4.48 2.368 0 .427.138.768.416 1.024.277.256.672.384 1.184.384zm13.693 3.552c-1.28 0-1.92-.341-1.92-1.024V12.396c0-.939-.032-1.653-.096-2.144a32.587 32.587 0 00-.192-1.696 3.536 3.536 0 01-.096-.672c0-.341.427-.597 1.28-.768.875-.17 1.643-.256 2.304-.256.384 0 .651.15.8.448.149.277.256.587.32.928.085.341.139.576.16.704.512-.683 1.195-1.259 2.048-1.728a5.559 5.559 0 012.72-.704c1.6 0 2.784.427 3.552 1.28.768.832 1.152 2.133 1.152 3.904V22.54c0 .683-.64 1.024-1.92 1.024h-.896c-1.28 0-1.92-.341-1.92-1.024V12.396c0-.661-.149-1.152-.448-1.472-.299-.341-.789-.512-1.472-.512-.576 0-1.088.192-1.536.576-.427.363-.768.79-1.024 1.28V22.54c0 .683-.64 1.024-1.92 1.024h-.896zm19.989.192c-1.643 0-2.848-.427-3.616-1.28-.747-.853-1.12-1.984-1.12-3.392 0-1.707.618-3.125 1.856-4.256 1.258-1.13 3.701-1.696 7.328-1.696v-1.056c0-.619-.203-1.077-.608-1.376-.384-.299-1.014-.448-1.888-.448-.726 0-1.366.075-1.92.224-.534.15-1.014.32-1.44.512-.427.192-.672.288-.736.288-.214 0-.448-.16-.704-.48a5.507 5.507 0 01-.672-1.088c-.192-.427-.288-.757-.288-.992 0-.363.266-.715.8-1.056.533-.341 1.269-.619 2.208-.832.938-.213 1.973-.32 3.104-.32 2.41 0 4.16.48 5.248 1.44 1.088.939 1.632 2.24 1.632 3.904v6.016c0 .981.021 1.728.064 2.24.064.512.138 1.077.224 1.696.064.277.096.512.096.704 0 .341-.438.597-1.312.768-.854.17-1.611.256-2.272.256-.384 0-.651-.15-.8-.448a5.2 5.2 0 01-.352-1.024 81.547 81.547 0 01-.128-.736c-.128.235-.384.544-.768.928-.384.363-.918.704-1.6 1.024-.683.32-1.462.48-2.336.48zm1.568-3.744c.597 0 1.162-.192 1.696-.576a3.511 3.511 0 001.184-1.44v-1.76c-2.987 0-4.48.79-4.48 2.368 0 .427.138.768.416 1.024.277.256.672.384 1.184.384zm18.173 10.272c-5.077 0-7.616-1.472-7.616-4.416 0-.832.245-1.568.736-2.208.512-.64 1.237-1.141 2.176-1.504l.032-.128a2.236 2.236 0 01-1.024-.96 2.934 2.934 0 01-.352-1.44c0-1.173.64-2.133 1.92-2.88-1.728-.917-2.592-2.432-2.592-4.544 0-1.941.629-3.37 1.888-4.288 1.28-.939 2.944-1.408 4.992-1.408.832 0 1.653.085 2.464.256h5.152c.341 0 .587.128.736.384.149.256.224.661.224 1.216v.544c0 1.003-.256 1.504-.768 1.504a4.72 4.72 0 01-.832-.096 3.84 3.84 0 01-.704-.192l-.064.128c.192.213.352.512.48.896.128.363.192.715.192 1.056 0 1.835-.608 3.2-1.824 4.096-1.195.896-2.763 1.344-4.704 1.344-.939 0-1.547.085-1.824.256-.277.15-.416.405-.416.768 0 .384.245.65.736.8.491.15 1.323.31 2.496.48.384.043.981.128 1.792.256 1.515.299 2.72.79 3.616 1.472.896.661 1.344 1.717 1.344 3.168 0 1.088-.341 2.037-1.024 2.848-.683.832-1.653 1.472-2.912 1.92-1.237.448-2.677.672-4.32.672zm.16-16.064c.704 0 1.28-.17 1.728-.512.448-.363.672-.907.672-1.632 0-.704-.224-1.237-.672-1.6-.448-.363-1.024-.544-1.728-.544s-1.28.181-1.728.544c-.448.363-.672.896-.672 1.6 0 .725.224 1.27.672 1.632.448.341 1.024.512 1.728.512zm.192 12.32c1.088 0 1.909-.139 2.464-.416.555-.277.832-.661.832-1.152 0-.49-.363-.853-1.088-1.088-.704-.213-1.984-.384-3.84-.512-.533.192-.96.437-1.28.736-.299.32-.448.65-.448.992 0 .448.267.8.8 1.056.555.256 1.408.384 2.56.384zm17.804-2.784c-2.816 0-4.918-.747-6.304-2.24-1.366-1.515-2.048-3.605-2.048-6.272 0-3.008.682-5.216 2.048-6.624 1.386-1.408 3.296-2.112 5.728-2.112 2.368 0 4.106.768 5.216 2.304 1.13 1.536 1.696 3.52 1.696 5.952 0 .256-.224.64-.672 1.152-.427.49-.747.736-.96.736h-8.16c.106 1.216.469 2.08 1.088 2.592.618.512 1.482.768 2.592.768.597 0 1.141-.064 1.632-.192.49-.15 1.002-.33 1.536-.544.341-.17.576-.256.704-.256.213 0 .448.16.704.48.277.299.501.65.672 1.056.192.384.288.683.288.896 0 .49-.331.917-.992 1.28-.662.341-1.451.597-2.368.768-.918.17-1.718.256-2.4.256zm1.728-10.272c0-.981-.192-1.76-.576-2.336-.384-.597-.96-.896-1.728-.896-1.579 0-2.539 1.077-2.88 3.232h5.184zm9.73 10.08c-1.28 0-1.92-.341-1.92-1.024V12.396c0-.939-.032-1.653-.096-2.144a32.587 32.587 0 00-.192-1.696 3.536 3.536 0 01-.096-.672c0-.341.426-.597 1.28-.768.874-.17 1.642-.256 2.304-.256.384 0 .65.15.8.448.149.277.256.587.32.928.085.341.138.576.16.704.405-.747.874-1.333 1.408-1.76.554-.448 1.248-.672 2.08-.672.725 0 1.205.15 1.44.448.256.277.384.704.384 1.28 0 .448-.096 1.013-.288 1.696-.192.661-.427.992-.704.992-.128 0-.352-.043-.672-.128a3.304 3.304 0 00-.832-.128c-.576 0-1.088.17-1.536.512-.427.32-.768.683-1.024 1.088V22.54c0 .683-.64 1.024-1.92 1.024h-.896z"
        fill="#fff"
        fillOpacity={0.86}
      />
    </svg>
  )
}
