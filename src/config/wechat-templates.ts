import type { RendererOptions } from '@/lib/markdown'

export interface Template {
  id: string
  name: string
  description: string
  styles: string
  options: RendererOptions
  transform?: (html: string) => string | { html?: string; content?: string }
}

export const templates: Template[] = [
{
  id: 'default',
  name: '律海行',
  description: '小陈陈自定义的默认样式',
  styles: '',
  options: {
    base: {
      themeColor: '#C01E3A',
      fontFamily: '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
      textAlign: 'left',
      lineHeight: '1.7',
      padding: '1rem 1.5rem',
      maxWidth: '100%',
      margin: '0 auto',
      wordBreak: 'break-word',
      whiteSpace: 'pre-wrap',
      fontSize: '17px',
      color: '#B6BBC4',
      //boldColor: '#C01E3A'
      // 移除 backgroundColor 属性，因为它不在类型定义中
      // backgroundColor: '#ffffff'
    },
    block: {
      // 一级标题
      h1: {
        display: 'table',
        padding: '0.5em 1em',
        borderBottom: '2px solid var(--themeColor)',
        margin: '2em auto 1em',
        color: '#000000',
        fontSize: '1.4em',
        fontWeight: 'bold',
        textAlign: 'center'
      },

      // 二级标题
      h2: {
  display: 'table',
  padding: '1.2em',  // 等边内边距
  margin: '2em auto 2em',
  color: '#FFFFFF',
  background: '#800000',
  fontSize: '1.3em',
  fontWeight: 'bold',
  borderRadius: '50%',  // 50%实现正圆形
  textAlign: 'center',
  width: '60px',  // 固定宽度
  height: '60px',  // 固定高度
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
      },

      // 三级标题
      h3: {
        paddingLeft: '8px',
        borderLeft: '3px solid var(--themeColor)',
        margin: '2em 8px 0.75em 0',
        color: '#000000',
        fontSize: '1.2em',
        fontWeight: 'bold',
        lineHeight: '1.2'
      },

      // 四级标题
      h4: {
        margin: '2em 8px 0.5em',
        color: '#000000',
        fontSize: '1.1em',
        fontWeight: 'bold'
      },

      // 五级标题
      h5: {
        margin: '1.5em 8px 0.5em',
        color: '#000000',
        fontSize: '1.0em',
        fontWeight: 'bold'
      },

      // 六级标题
      h6: {
        margin: '1.5em 8px 0.5em',
        fontSize: '1.0em',
        color: '#000000'
      },

      // 段落 - 根据图片中的排版修改
      p: {
        'fontSize': '17px',
        'margin': '0 0 1.5em 0',  // 调整为与图片类似的段后距
        'lineHeight': '1.7',
        'color': '#000000',
        'textAlign': 'justify',
        'textIndent': '0',  // 添加首行缩进
        'letterSpacing': '0.01em'  // 轻微字间距
      },

      // 引用
      blockquote: {
        fontStyle: 'normal',
        padding: '1em',
        borderLeft: '4px solid var(--themeColor)',
        borderRadius: '6px',
        color: '#000000',
        background: 'rgba(0, 0, 0, 0.05)',
        margin: '0 0 1.5em 0',
        lineHeight: '1.6'
      },

      // 代码块
      code_pre: {
        'fontSize': '14px',
        'overflowX': 'auto',
        'borderRadius': '8px',
        'padding': '1em',
        'lineHeight': '1.5',
        'margin': '0 0 1.5em 0',
        'backgroundColor': 'rgba(0, 0, 0, 0.05)',
        'color': '#000000'
      },

      // 行内代码
      code: {
        margin: '0',
        fontFamily: 'Menlo, Operator Mono, Consolas, Monaco, monospace',
        fontSize: '14px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: '2px 4px',
        borderRadius: '4px',
        color: '#d14'
      },

      // 图片
      image: {
        'display': 'block',
        'maxWidth': '100%',
        'height': 'auto',
        'margin': '0 auto 1.5em',
        'borderRadius': '4px',
      },

      // 有序列表
      ol: {
        paddingLeft: '1.5em',
        color: '#000000',
        margin: '0 0 1.5em 0',
        lineHeight: '1.7'
      },

      // 无序列表
      ul: {
        listStyleType: 'circle',
        paddingLeft: '1.5em',
        color: '#000000',
        margin: '0 0 1.5em 0',
        lineHeight: '1.7'
      },

      footnotes: {
        'margin': '0.5em 0',
        'fontSize': '14px',
        'color': '#000000',
        'lineHeight': '1.6'
      },

      table: {
        textAlign: 'center',
        margin: '0 0 1.5em 0',
        color: '#000000',
        borderCollapse: 'collapse',
        width: '100%'
      },

      thead: {
        'background': 'rgba(0, 0, 0, 0.05)',
        'fontWeight': 'bold',
        'color': '#000000',
      },

      td: {
        border: '1px solid rgba(0, 0, 0, 0.2)',
        padding: '0.5em 0.75em',
        color: '#000000',
      },
    },
    inline: {
      listitem: {
        display: 'block',
        margin: '0.2em 0',
        color: '#000000',
        lineHeight: '1.7'
      },

      codespan: {
        'fontSize': '14px',
        'color': '#d14',
        'background': 'rgba(0, 0, 0, 0.05)',
        'padding': '2px 6px',
        'borderRadius': '4px',
        'fontFamily': 'Menlo, Monaco, Consolas, "Courier New", monospace'
      },

      em: {
        'fontStyle': 'italic',
        'color': '#000000',
      },

      link: {
        color: '#576b95',
        textDecoration: 'none',
        borderBottom: '1px solid #576b95'
      },

      // 字体加粗样式
      strong: {
        //color: '#C01E3A',
        //color: `var(--themeColor)`,
        fontWeight: 'bold',
        fontSize: 'inherit'
      },

      footnote: {
        'fontSize': '12px',
        'color': '#000000',
      }
    }
  },
  transform: (html: string) => html
},
{
  id: 'law1',
  name: '律蓝',
  description: '小陈陈自定义的蓝色样式',
  styles: '',
  options: {
    base: {
      themeColor: 'rgb(15, 76, 129)',
      fontFamily: '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
      textAlign: 'left',
      lineHeight: '1.7',
      padding: '1rem 1.5rem',
      maxWidth: '100%',
      margin: '0 auto',
      wordBreak: 'break-word',
      whiteSpace: 'pre-wrap',
      fontSize: '17px',
      color: '#004C7F',
      //boldColor: '#C01E3A'
      // 移除 backgroundColor 属性，因为它不在类型定义中
      // backgroundColor: '#ffffff'
    },
    block: {
      // 一级标题
      h1: {
        display: 'table',
        padding: '0.5em 1em',
        borderBottom: '2px solid var(--themeColor)',
        margin: '2em auto 1em',
        color: '#000000',
        fontSize: '1.2em',
        fontWeight: 'bold',
        textAlign: 'center'
      },

      // 二级标题
      h2: {
        display: 'table',
        padding: '0.3em 1.2em',
        margin: '2em auto 2em',
        color: '#000000',
        background: 'rgb(245, 245, 245)',
        fontSize: '1.1em',
        fontWeight: 'bold',
        borderRadius: '0px 24px 24px 0px',
        textAlign: 'center'
      },

      // 三级标题
      h3: {
        paddingLeft: '8px',
        borderLeft: '3px solid var(--themeColor)',
        margin: '2em 8px 0.75em 0',
        color: '#000000',
        fontSize: '1.0em',
        fontWeight: 'bold',
        lineHeight: '1.2'
      },

      // 四级标题
      h4: {
        margin: '2em 8px 0.5em',
        color: '#000000',
        fontSize: '0.9em',
        fontWeight: 'bold'
      },

      // 五级标题
      h5: {
        margin: '1.5em 8px 0.5em',
        color: '#000000',
        fontSize: '0.8em',
        fontWeight: 'bold'
      },

      // 六级标题
      h6: {
        margin: '1.5em 8px 0.5em',
        fontSize: '0.7em',
        color: '#000000'
      },

      // 段落 - 根据图片中的排版修改
      p: {
        'fontSize': '17px',
        'margin': '0 0 1.5em 0',  // 调整为与图片类似的段后距
        'lineHeight': '1.7',
        'color': '#000000',
        'textAlign': 'justify',
        'textIndent': '0',  // 添加首行缩进
        'letterSpacing': '0.01em'  // 轻微字间距
      },

      // 引用
      blockquote: {
        fontStyle: 'normal',
        padding: '1em',
        borderLeft: '4px solid var(--themeColor)',
        borderRadius: '6px',
        color: '#000000',
        background: 'rgba(0, 0, 0, 0.05)',
        margin: '0 0 1.5em 0',
        lineHeight: '1.6'
      },

      // 代码块
      code_pre: {
        'fontSize': '14px',
        'overflowX': 'auto',
        'borderRadius': '8px',
        'padding': '1em',
        'lineHeight': '1.5',
        'margin': '0 0 1.5em 0',
        'backgroundColor': 'rgba(0, 0, 0, 0.05)',
        'color': '#000000'
      },

      // 行内代码
      code: {
        margin: '0',
        fontFamily: 'Menlo, Operator Mono, Consolas, Monaco, monospace',
        fontSize: '14px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: '2px 4px',
        borderRadius: '4px',
        color: '#d14'
      },

      // 图片
      image: {
        'display': 'block',
        'maxWidth': '100%',
        'height': 'auto',
        'margin': '0 auto 1.5em',
        'borderRadius': '4px',
      },

      // 有序列表
      ol: {
        paddingLeft: '1.5em',
        color: '#000000',
        margin: '0 0 1.5em 0',
        lineHeight: '1.7'
      },

      // 无序列表
      ul: {
        listStyleType: 'circle',
        paddingLeft: '1.5em',
        color: '#000000',
        margin: '0 0 1.5em 0',
        lineHeight: '1.7'
      },

      footnotes: {
        'margin': '0.5em 0',
        'fontSize': '14px',
        'color': '#000000',
        'lineHeight': '1.6'
      },

      table: {
        textAlign: 'center',
        margin: '0 0 1.5em 0',
        color: '#000000',
        borderCollapse: 'collapse',
        width: '100%'
      },

      thead: {
        'background': 'rgba(0, 0, 0, 0.05)',
        'fontWeight': 'bold',
        'color': '#000000',
      },

      td: {
        border: '1px solid rgba(0, 0, 0, 0.2)',
        padding: '0.5em 0.75em',
        color: '#000000',
      },
    },
    inline: {
      listitem: {
        display: 'block',
        margin: '0.2em 0',
        color: '#000000',
        lineHeight: '1.7'
      },

      codespan: {
        'fontSize': '14px',
        'color': '#d14',
        'background': 'rgba(0, 0, 0, 0.05)',
        'padding': '2px 6px',
        'borderRadius': '4px',
        'fontFamily': 'Menlo, Monaco, Consolas, "Courier New", monospace'
      },

      em: {
        'fontStyle': 'italic',
        'color': '#000000',
      },

      link: {
        color: '#576b95',
        textDecoration: 'none',
        borderBottom: '1px solid #576b95'
      },

      // 字体加粗样式
      strong: {
        //color: '#C01E3A',
        //color: `var(--themeColor)`,
        fontWeight: 'bold',
        fontSize: 'inherit'
      },

      footnote: {
        'fontSize': '12px',
        'color': '#000000',
      }
    }
  },
  transform: (html: string) => html
},
  {
    id: 'law2',
    name: '律2',
    description: '小陈陈自定义的样式2',
    styles: '',
    options: {
        base: {
            themeColor: 'rgb(15, 76, 129)',
            fontFamily: '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
            textAlign: 'left',
            lineHeight: '1.7',
            padding: '1rem 1.5rem',
            maxWidth: '100%',
            margin: '0 auto',
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
            fontSize: '17px',
            color: '#344FA1'
          },
          block: {    // 一级标题
            h1: {
              display: 'table',
              padding: '0.5em 1em',
              borderBottom: '2px solid var(--themeColor)',
              margin: '2em auto 1em',
              color: 'hsl(var(--foreground))',
              fontSize: '1.4em',
              fontWeight: 'bold',
              textAlign: 'center'
            },

              // 二级标题
            h2: {
              display: 'table',
              padding: '0.3em 1.2em',
              margin: '2em auto 2em',
              color: '#fff',
              background: 'rgb(245, 245, 245)',
              fontSize: '1.3em',
              fontWeight: 'bold',
              borderRadius: '0px 24px 24px 0px',
              // boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              textAlign: 'center'
            },
     
        
            // 三级标题
            h3: {
              paddingLeft: '8px',
              borderLeft: '3px solid var(--themeColor)',
              margin: '2em 8px 0.75em 0',
              color: 'var(--themeColor)',
              fontSize: '1.2em',
              fontWeight: 'bold',
              lineHeight: '1.2'
            
            },
        
            // 四级标题
            h4: {
              margin: '2em 8px 0.5em',
              color: 'var(--themeColor)',
              fontSize: '1.2em',
              fontWeight: 'bold'
            },  
            
            // 五级标题
            h5: {
              margin: '1.5em 8px 0.5em',
              color: '#333333',
              fontSize: '1.1em',
              fontWeight: 'bold'
            },
        
            // 六级标题
            h6: {
              margin: '1.5em 8px 0.5em',
              fontSize: '1.1em',
              color: '#333333'
            },
        
            // 段落
            p: {
              'fontSize': `var(--fontSize)`,
              'margin': `0 8px 30px 8px`,
              'letterSpacing': `0.1em`,
              'color': `hsl(var(--foreground))`,
              'textAlign': `justify`,
            },
        
            // 引用
            blockquote: {
              fontStyle: 'normal',
              padding: '1em',
              borderLeft: '4px solid var(--themeColor)',
              borderRadius: '6px',
              color: 'rgba(0,0,0,0.5)',
              background: 'var(--blockquote-background)',
              margin: '0 0 1em 0'
            },
        
            // 代码块
            code_pre: {
              'fontSize': `14px`,
              'overflowX': `auto`,
              'borderRadius': `8px`,
              'padding': `1em`,
              'lineHeight': `1.5`,
              'margin': `10px 8px`,
            },
        
            // 行内代码
            code: {
              margin: '0',
              fontFamily: 'Menlo, Operator Mono, Consolas, Monaco, monospace'
            },
        
            // 图片
            image: {
              'display': `block`,
              'width': `100% !important`,
              'margin': `0.1em auto 0.5em`,
              'borderRadius': `4px`,
            },
        
            // 有序列表
            ol: {
              paddingLeft: '1em',
              color: 'hsl(var(--foreground))'
            },
        
            // 无序列表
            ul: {
              listStyle: 'circle',
              paddingLeft: '1em',
              color: 'hsl(var(--foreground))'
            },
        
            footnotes: {
              'margin': `0.5em 8px`,
              'fontSize': `80%`,
              'color': `hsl(var(--foreground))`,
            },

            table: {
              textAlign: 'center',
              margin: '1em 8px',
              color: 'hsl(var(--foreground))'
            },

            thead: {
              'background': `rgba(0, 0, 0, 0.05)`,
              'fontWeight': `bold`,
              'color': `hsl(var(--foreground))`,
            },

            td: {
              border: '1px solid #dfdfdf',
              padding: '0.25em 0.5em',
              color: '#3f3f3f',
            },

          
          },
          inline: {
            listitem: {
              display: 'block',
              margin: '0.2em 8px',
              color: 'hsl(var(--foreground))'
            },
        
            codespan: {
              'fontSize': `95%`,
              'color': `#d14`,
              'background': `rgba(27,31,35,.05)`,
              'padding': `3px 5px`,
              'borderRadius': `4px`,
              // 'word-break': `break-all`,
            },
        
            em: {
              'fontStyle': `italic`,
              'fontSize': `90%`,
            },
        
            link: {
              color: `#576b95`,
            },
      
            // 字体加粗样式
            strong: {
              color: '#333',
              fontWeight: 'bold',
              fontSize: 'inherit'
            },
        
            footnote: {
              'fontSize': `12px`,
              'color': `hsl(var(--foreground))`,
            }
          }
        },
        transform: (html: string) => html
  },
   {
    id: 'zhidai',
    name: '绿色样式',
    description: '清晰简约的绿色样式',
    styles: '',
    options: {
        base: {
            themeColor: 'rgb(0, 179, 138)',
            fontFamily: '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
            textAlign: 'left',
            lineHeight: '2',
            padding: '1rem 1.5rem',
            maxWidth: '100%',
            margin: '0 auto',
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
            fontSize: '15px',
            color: '#333'
          },
          block: {    // 一级标题
            h1: {
              display: 'table',
              padding: '0 1em',
              borderBottom: '2px solid var(--themeColor)',
              margin: '2em auto 1em',
              color: 'hsl(var(--foreground))',
              fontSize: '1.2em',
              fontWeight: 'bold',
              textAlign: 'center'
            },
        
            // 二级标题
            h2: {
              display: 'table',
              padding: '0 0.2em',
              margin: '2em auto 2em',
              color: '#fff',
              background: 'var(--themeColor)',
              fontSize: '1.2em',
              fontWeight: 'bold',
              textAlign: 'center'
            },
        
            // 三级标题
            h3: {
              paddingLeft: '8px',
              borderLeft: '3px solid var(--themeColor)',
              margin: '2em 8px 0.75em 0',
              color: 'hsl(var(--foreground))',
              fontSize: '1.1em',
              fontWeight: 'bold',
              lineHeight: '1.2'
            },
        
            // 四级标题
            h4: {
              'margin': `2em 8px 0.5em`,
              'color': `var(--themeColor)`,
              'fontSize': `1em`,
              'fontWeight': `bold`,
            },
        
            // 五级标题
            h5: {
              'margin': `1.5em 8px 0.5em`,
              'color': `var(--themeColor)`,
              'fontSize': `1em`,
              'fontWeight': `bold`,
            },
        
            // 六级标题
            h6: {
              'margin': `1.5em 8px 0.5em`,
              'fontSize': `1em`,
              'color': `var(--themeColor)`,
            },
        
            // 段落
            p: {
              'fontSize': `var(--fontSize)`,
              'margin': `1.5em 8px`,
              'letterSpacing': `0.1em`,
              'color': `hsl(var(--foreground))`,
              'textAlign': `justify`,
            },
        
            // 引用
            blockquote: {
              fontStyle: 'normal',
              padding: '1em',
              borderLeft: '4px solid var(--themeColor)',
              borderRadius: '6px',
              color: 'rgba(0,0,0,0.5)',
              background: 'var(--blockquote-background)',
              margin: '0 0 1em 0'
            },
        
            // 代码块
            code_pre: {
              'fontSize': `14px`,
              'overflowX': `auto`,
              'borderRadius': `8px`,
              'padding': `1em`,
              'lineHeight': `1.5`,
              'margin': `10px 8px`,
            },
        
            // 行内代码
            code: {
              margin: '0',
              fontFamily: 'Menlo, Operator Mono, Consolas, Monaco, monospace'
            },
        
            // 图片
            image: {
              'display': `block`,
              'width': `100% !important`,
              'margin': `0.1em auto 0.5em`,
              'borderRadius': `4px`,
            },
        
            // 有序列表
            ol: {
              paddingLeft: '1em',
              color: 'hsl(var(--foreground))'
            },
        
            // 无序列表
            ul: {
              listStyle: 'circle',
              paddingLeft: '1em',
              color: 'hsl(var(--foreground))'
            },
        
            footnotes: {
              'margin': `0.5em 8px`,
              'fontSize': `80%`,
              'color': `hsl(var(--foreground))`,
            },

            table: {
              textAlign: 'center',
              margin: '1em 8px',
              color: 'hsl(var(--foreground))'
            },

            thead: {
              'background': `rgba(0, 0, 0, 0.05)`,
              'fontWeight': `bold`,
              'color': `hsl(var(--foreground))`,
            },

            td: {
              border: '1px solid #dfdfdf',
              padding: '0.25em 0.5em',
              color: '#3f3f3f',
            },

          
          },
          inline: {
            listitem: {
              display: 'block',
              margin: '0.2em 8px',
              color: 'hsl(var(--foreground))'
            },
        
            codespan: {
              'fontSize': `90%`,
              'color': `#d14`,
              'background': `rgba(27,31,35,.05)`,
              'padding': `3px 5px`,
              'borderRadius': `4px`,
              // 'word-break': `break-all`,
            },
        
            em: {
              'fontStyle': `italic`,
              'fontSize': `inherit`,
            },
        
            link: {
              color: `#576b95`,
            },
      
            // 字体加粗样式
            strong: {
              'color': `var(--themeColor)`,
              'fontWeight': `bold`,
              'fontSize': `inherit`,
            },
        
            footnote: {
              'fontSize': `12px`,
              'color': `hsl(var(--foreground))`,
            }
          }
        },
        transform: (html: string) => html
  },
  {
    id: 'simple',
    name: '简洁风格',
    description: '雷军公众号文章样式',
    styles: '',
    options: {
      base: {
        themeColor: 'rgb(255, 104, 39)',
        fontSize:'16px',
        lineHeight: '1.75em',
      },
      block: {
        h1: {
          textAlign:'justify',
          textIndent: '0em',
          lineHeight: '1.75em',
          margin:'1em 8px',
          color: 'rgb(255, 104, 39)',
          fontSize: '24px',
          letterSpacing: '1px',
        },
        h2: {
          textAlign:'justify',
          textIndent: '0em',
          lineHeight: '1.75em',
          margin:'1em 8px',
          color: 'rgb(255, 104, 39)',
          fontSize: '24px',
          letterSpacing: '1px',
        },
        h3: {
          textAlign:'justify',
          textIndent: '0em',
          lineHeight: '1.75em',
          margin:'1em 8px',
          fontSize: '16px',
          fontWeight: 'bold',
        },
        p: {
          textAlign:'justify',
          textIndent: '0em',
          lineHeight: '1.75em',
          margin:'1em 8px',
          fontSize: '16px',
          fontFamily: 'mp-quote, PingFang SC, system-ui, -apple-system, BlinkMacSystemFont, Helvetica Neue, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif',
          letterSpacing: '1px',
        }
      },
      inline: {
        strong: {
          color: '#16a34a',
          fontWeight: 'bold'
        },
        em: {
          fontStyle: 'italic',
          color: '#666'
        },
        link: {
          color: '#3b82f6',
          textDecoration: 'underline'
        }
      }
    },
    transform: (html: string) => html
  },
  {
    id: 'elegant',
    name: '优雅风格',
    description: '适合文学、艺术类文章',
    styles: 'prose-elegant',
    options: {
      base: {
        themeColor: '#16a34a',
        textAlign: 'left',
        lineHeight: '1.75',
        padding: '1rem 1.5rem',
        maxWidth: '100%',
        margin: '0 auto',
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
        fontSize: '15px',
        color: '#333'
      },
      block: {
        h1: {
          display: 'table',
          padding: '0 1.2em',
          borderBottom: '2px solid #16a34a',
          margin: '2.5em auto 1.2em',
          fontSize: '1.4em',
          fontWeight: 'bold',
          textAlign: 'center'
        },
        h2: {
            display: 'table',
            padding: '0 1.5em',
            borderBottom: '2px solid #16a34a',
            margin: '2.5em auto 1.2em',
            fontSize: '1.4em',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        h3: {
          paddingLeft: '8px',
          borderLeft: '3px solid var(--themeColor)',
          margin: '2em 8px 0.75em 0',
          color: 'hsl(var(--foreground))',
          fontSize: '1.1em',
          fontWeight: 'bold',
          lineHeight: 1.2
        },
        p: {
          fontSize: '15px',
          margin: '1.8em 8px',
          letterSpacing: '0.12em',
          color: '#2c3e50',
          textAlign: 'justify',
          lineHeight: 1.8
        }
      },
      inline: {
        strong: {
          color: '#16a34a',
          fontWeight: 'bold'
        },
        em: {
          fontStyle: 'italic',
          color: '#666'
        },
        link: {
          color: '#3b82f6',
          textDecoration: 'underline'
        }
      }
    },
    transform: (html: string) => html
  },
  {
    id: 'creative',
    name: '科技主题',
    description: '适合科技技术类文章',
    styles: 'prose-creative',
    options: {
      base: {
        themeColor: '#4299e1',
        textAlign: 'left',
        lineHeight: '1.8',
        fontSize: '15px'
      },
      block: {
        h1: {
          fontSize: '26px',
          background: 'linear-gradient(45deg, #4299e1, #667eea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '32px 0 16px',
          fontWeight: 'bold'
        },
        h2: {
          fontSize: '22px',
          background: 'linear-gradient(45deg, #4299e1, #667eea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '24px 0 12px',
          fontWeight: 'bold'
        },
        h3: {
          fontSize: '18px',
          background: 'linear-gradient(45deg, #4299e1, #667eea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '20px 0 10px',
          fontWeight: 'bold'
        },
        p: {
          fontSize: '15px',
          color: '#4a5568',
          margin: '20px 0',
          lineHeight: 1.75,
        },
        blockquote: {
          fontSize: '15px',
          color: '#718096',
          borderLeft: '4px solid #4299e1',
          padding:"1em",
          margin: '24px 0',
          background: 'rgba(66, 153, 225, 0.1)'
        }
      },
      inline: {
       
        strong: {
          color: '#4299e1',
          fontWeight: 'bold'
        },
        em: {
          color: '#4a5568',
          fontStyle: 'italic'
        },
        link: {
          color: '#4299e1',
          textDecoration: 'underline'
        }
      }
    },
    transform: (html: string) => html
  },
  {
    id: 'smartisan',
    name: '锤子便签',
    description: '简洁优雅的锤子便签风格',
    styles: 'prose-smartisan',
    options: {
      base: {
        themeColor: 'rgb(99, 87, 83)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
        textAlign: 'left',
        lineHeight: '1.75',
        padding: '1.2rem',
        margin: '0 auto',
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
        fontSize: '16px',
        color: 'rgb(99, 87, 83)'
      },
      block: {
        h1: {
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333333',
          margin: '1.5em 0 1em',
          padding: '0.5em 0',
          textAlign: 'center'
        },
        h2: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333333',
          margin: '1.5em 0 1em',
          padding: '0.3em 0',
          textAlign: 'left'
        },
        h3: {
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333333',
          margin: '1.2em 0 0.8em',
          paddingLeft: '0.8em',
        },
        p: {
          margin: '1.2em 0',
          lineHeight: '1.8',
          color: '#333333',
          fontSize: '16px',
          textAlign: 'justify',
          letterSpacing: '0.05em'
        },
        blockquote: {
          margin: '1.2em 0',
          padding: '1em 1.2em',
          borderLeft: '4px solid gba(0, 0, 0, 0.4)',
          background: '#F8F9FA',
          borderRadius: '0 4px 4px 0',
          color: '#666666'
        },
        ul: {
          margin: '1em 0',
          paddingLeft: '1.5em',
          listStyle: 'disc',
          color: '#333333'
        },
        ol: {
          margin: '1em 0',
          paddingLeft: '1.5em',
          listStyle: 'decimal',
          color: '#333333'
        },
        code_pre: {
          margin: '1.2em 0',
          padding: '1em',
          background: '#F8F9FA',
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
          overflowX: 'auto'
        },
        image: {
          margin: '1.2em auto',
          display: 'block',
          borderRadius: '4px'
        }
      },
      inline: {
        strong: {
          color: '#FF6E42',
          fontWeight: 'bold'
        },
        em: {
          fontStyle: 'italic',
          color: '#666666'
        },
        link: {
          color: '#FF6E42',
          textDecoration: 'none',
          borderBottom: '1px solid #FF6E42'
        },
        codespan: {
          background: '#F8F9FA',
          padding: '0.2em 0.4em',
          borderRadius: '3px',
          fontSize: '0.9em',
          color: '#FF6E42',
          fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace'
        },
        listitem: {
          margin: '0.5em 0',
          lineHeight: '1.8'
        }
      }
    },
    transform: (html: string) => {
      return `<section id="nice" style="margin: 0; padding: 10px 20px; background-color: rgb(251, 247, 238); width: auto; font-family: PingFangSC-regular, sans-serif; font-size: 16px; color: rgb(0, 0, 0); line-height: 1.5em; word-spacing: 0; letter-spacing: 0; word-break: break-word; overflow-wrap: break-word; text-align: left;">
        ${html}
      </section>`;
    }
  }
]; 
