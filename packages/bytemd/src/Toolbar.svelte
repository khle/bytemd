<script>
  import { createEventDispatcher } from 'svelte';
  import ToolbarButton from './ToolbarButton.svelte';
  import {
    handleDec,
    handleTag,
    handleBlockquote,
    handleLink,
    handleImage,
    handleTable,
    handleHeading,
    handleOl,
    handleUl,
    handleTask,
  } from './utils.js';

  import heading from 'icons/heading.svg';
  import bold from 'icons/bold.svg';
  import italic from 'icons/italic.svg';
  import quote from 'icons/quote.svg';
  import image from 'icons/image.svg';
  import server from 'icons/server.svg';
  import link from 'icons/link.svg';
  import iconOl from 'icons/list-ordered.svg';
  import iconUl from 'icons/list-unordered.svg';
  import task from 'icons/tasklist.svg';

  const dispatch = createEventDispatcher();

  export let cm;
  export let fileHandler;
  export let plugins;
  export let mode;
  export let activeTab;

  let fileInput;
</script>

<style>
  div {
    display: flex;
    padding: 4px;
    border-bottom: 1px solid #eee;
  }
  input {
    display: none;
  }
  .bytemd-tab :global(span) {
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 26px;
  }
  .active {
    color: #0366d6;
  }
</style>

<div>
  <input
    bind:this={fileInput}
    type="file"
    accept="image/*"
    on:input={e => handleImage(cm, e, fileHandler)} />

  {#if mode === 'tab'}
    <span class="bytemd-tab">
      <span
        on:click={() => dispatch('tab', { value: 0 })}
        class:active={activeTab === 0}>
        Write
      </span>
      <span
        on:click={() => dispatch('tab', { value: 1 })}
        class:active={activeTab === 1}>
        Preview
      </span>
    </span>
  {/if}

  <ToolbarButton tooltip="heading" on:click={() => handleHeading(cm)}>
    {@html heading}
  </ToolbarButton>
  <ToolbarButton tooltip="bold" on:click={() => handleDec(cm, '**')}>
    {@html bold}
  </ToolbarButton>
  <ToolbarButton tooltip="italic" on:click={() => handleDec(cm, '_')}>
    {@html italic}
  </ToolbarButton>
  <ToolbarButton tooltip="blockquote" on:click={() => handleBlockquote(cm)}>
    {@html quote}
  </ToolbarButton>
  <ToolbarButton tooltip="link" on:click={() => handleLink(cm)}>
    {@html link}
  </ToolbarButton>
  <ToolbarButton tooltip="image" on:click={() => fileInput.click()}>
    {@html image}
  </ToolbarButton>
  <ToolbarButton tooltip="table" on:click={() => handleTable(cm)}>
    {@html server}
  </ToolbarButton>
  <ToolbarButton tooltip="ordered list" on:click={() => handleOl(cm)}>
    {@html iconOl}
  </ToolbarButton>
  <ToolbarButton tooltip="unordered list" on:click={() => handleUl(cm)}>
    {@html iconUl}
  </ToolbarButton>
  <ToolbarButton tooltip="task list" on:click={() => handleTask(cm)}>
    {@html task}
  </ToolbarButton>

  {#each plugins as plugin}
    {#if plugin.toolbarItems}
      {#each plugin.toolbarItems as item}
        <ToolbarButton tooltip={item.tooltip}>
          <svelte:component this={item.component} {...item.props} editor={cm} />
        </ToolbarButton>
      {/each}
    {/if}
  {/each}
</div>
